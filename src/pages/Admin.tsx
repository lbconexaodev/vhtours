import { useMemo, useState, useRef, type ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Upload } from "lucide-react";
import { deletePackage, fetchPackages, loginAdmin, savePackage, type VhPackage } from "@/lib/vhApi";

type FormState = {
  line?: number;
  destination: string;
  price: string;
  cardPrice: string;
  imageUrl: string;
  description: string;
};

const emptyForm: FormState = {
  destination: "",
  price: "",
  cardPrice: "",
  imageUrl: "",
  description: "",
};

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);

  const [packages, setPackages] = useState<VhPackage[]>([]);
  const [loadingPackages, setLoadingPackages] = useState(false);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isEditing = useMemo(() => Boolean(form.line), [form.line]);

  const loadPackages = async () => {
    setLoadingPackages(true);
    try {
      const data = await fetchPackages();
      setPackages(data);
    } catch {
      alert("Erro ao carregar pacotes.");
    } finally {
      setLoadingPackages(false);
    }
  };

  const handleLogin = async () => {
    if (!user || !pass) {
      alert("Preencha usuario e senha.");
      return;
    }

    setLoggingIn(true);
    try {
      const ok = await loginAdmin(user, pass);
      if (!ok) {
        alert("Usuario ou senha incorretos.");
        return;
      }
      setIsAuthenticated(true);
      await loadPackages();
    } catch {
      alert("Erro ao autenticar.");
    } finally {
      setLoggingIn(false);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      alert("A imagem deve ter no maximo 2MB.");
      event.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setForm((prev) => ({ ...prev, imageUrl: String(e.target?.result || "") }));
    };
    reader.readAsDataURL(file);
  };

  const clearForm = () => {
    setForm(emptyForm);
  };

  const onSave = async () => {
    if (!form.destination || !form.price) {
      alert("Preencha pelo menos destino e preco.");
      return;
    }

    setSaving(true);
    try {
      const ok = await savePackage({
        line: form.line,
        destination: form.destination,
        price: form.price,
        cardPrice: form.cardPrice,
        imageUrl: form.imageUrl,
        description: form.description,
      });

      if (ok) {
        alert("Pacote salvo com sucesso.");
      } else {
        alert("Solicitacao enviada. Verifique no site.");
      }
      clearForm();
      await loadPackages();
    } catch {
      alert("Solicitacao enviada. Verifique no site.");
      clearForm();
      await loadPackages();
    } finally {
      setSaving(false);
    }
  };

  const onDelete = async (line: number) => {
    if (!window.confirm("Deseja excluir este item?")) return;

    setSaving(true);
    try {
      await deletePackage(line);
      await loadPackages();
      alert("Item excluido.");
    } catch {
      alert("Comando enviado. Verifique no site.");
      await loadPackages();
    } finally {
      setSaving(false);
    }
  };

  const startEdit = (item: VhPackage) => {
    setForm({
      line: item.line,
      destination: item.destination,
      price: item.price,
      cardPrice: item.cardPrice,
      imageUrl: item.imageUrl,
      description: item.description,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-muted/40 flex items-center justify-center px-4">
        <section className="w-full max-w-md bg-card border border-border rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Area Administrativa</h1>
          <div className="space-y-3">
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="Usuario"
              className="w-full h-11 rounded-lg border border-input bg-background px-3"
            />
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Senha"
              className="w-full h-11 rounded-lg border border-input bg-background px-3"
              onKeyDown={(e) => {
                if (e.key === "Enter") void handleLogin();
              }}
            />
            <button
              onClick={() => void handleLogin()}
              disabled={loggingIn}
              className="w-full h-11 rounded-lg vh-gradient text-primary-foreground font-bold disabled:opacity-60"
            >
              {loggingIn ? "Autenticando..." : "Entrar"}
            </button>
          </div>
          <div className="text-center mt-4">
            <Link to="/" className="text-sm text-primary hover:underline">
              Voltar para o site
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/40 py-8 px-4">
      <div className="container mx-auto max-w-6xl space-y-6">
        <section className="bg-card border border-border rounded-2xl p-5 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Painel Administrativo</h1>
            <p className="text-sm text-muted-foreground">Gerencie os pacotes do mesmo back-end do site atual.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="px-4 py-2 rounded-lg border border-input hover:bg-muted transition-colors">
              Ver Site
            </Link>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground"
            >
              Sair
            </button>
          </div>
        </section>

        <section className="bg-card border border-border rounded-2xl p-5 md:p-8 space-y-6">
          <h2 className="text-xl font-bold">{isEditing ? "Editar Pacote" : "Adicionar Pacote"}</h2>
          <div className="flex flex-col gap-4">
            <input
              value={form.destination}
              onChange={(e) => setForm((prev) => ({ ...prev, destination: e.target.value }))}
              placeholder="Destino (Ej. Miami)"
              className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm"
            />
            <input
              value={form.price}
              onChange={(e) => setForm((prev) => ({ ...prev, price: e.target.value }))}
              placeholder="Precio (Ej. $ 500 ou R$ 1000)"
              className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm"
            />
            <input
              value={form.cardPrice}
              onChange={(e) => setForm((prev) => ({ ...prev, cardPrice: e.target.value }))}
              placeholder="Precio con Tarjeta (Ej. 06X DE 969,00 No Cartão)"
              className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm"
            />
            <input
              value={form.imageUrl}
              onChange={(e) => setForm((prev) => ({ ...prev, imageUrl: e.target.value }))}
              placeholder="URL da Imagem"
              className="h-12 w-full rounded-lg border border-input bg-background px-4 text-sm"
            />

            <div className="flex flex-col items-center gap-3 py-2">
              <span className="text-primary font-bold text-sm tracking-widest">OU</span>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 bg-[#9366d9] hover:bg-[#8255c8] text-white px-8 py-3 rounded-full text-xs font-bold uppercase transition-all shadow-md active:scale-95"
              >
                <Upload className="w-4 h-4" />
                SUBIR IMAGEM
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            <textarea
              value={form.description}
              onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))}
              placeholder="Descripción del destino"
              className="min-h-32 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm resize-none"
            />
          </div>

          {form.imageUrl ? (
            <div className="pt-2">
              <img src={form.imageUrl} alt="Preview" className="h-24 rounded border border-border object-cover" />
            </div>
          ) : null}

          <div className="flex gap-3 pt-1">
            <button
              onClick={() => void onSave()}
              disabled={saving}
              className="px-4 py-2 rounded-lg vh-gradient text-primary-foreground font-bold disabled:opacity-60"
            >
              {saving ? "Salvando..." : isEditing ? "Atualizar" : "Salvar"}
            </button>
            <button
              onClick={clearForm}
              disabled={saving}
              className="px-4 py-2 rounded-lg border border-input hover:bg-muted transition-colors disabled:opacity-60"
            >
              Limpar
            </button>
          </div>
        </section>

        <section className="bg-card border border-border rounded-2xl p-5 md:p-6">
          <h2 className="text-xl font-bold mb-4">Pacotes Ativos</h2>
          {loadingPackages ? (
            <p className="text-muted-foreground">Carregando pacotes...</p>
          ) : (
            <div className="overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b border-border">
                    <th className="py-2 pr-3">Destino</th>
                    <th className="py-2 pr-3">Preco</th>
                    <th className="py-2 pr-3">Cartao</th>
                    <th className="py-2 pr-3">Acoes</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((item) => (
                    <tr key={item.line} className="border-b border-border/70">
                      <td className="py-2 pr-3">{item.destination}</td>
                      <td className="py-2 pr-3">{item.price}</td>
                      <td className="py-2 pr-3">{item.cardPrice || "-"}</td>
                      <td className="py-2 pr-3">
                        <div className="flex gap-2">
                          <button
                            onClick={() => startEdit(item)}
                            className="px-3 py-1 rounded-md bg-primary text-primary-foreground"
                          >
                            Editar
                          </button>
                          <button
                            onClick={() => void onDelete(item.line)}
                            className="px-3 py-1 rounded-md bg-destructive text-destructive-foreground"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {!packages.length ? (
                    <tr>
                      <td className="py-3 text-muted-foreground" colSpan={4}>
                        Nenhum pacote cadastrado.
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Admin;
