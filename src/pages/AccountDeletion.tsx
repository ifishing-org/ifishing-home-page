import { Button } from "@/components/ui/button";
import { Fish, ArrowLeft, Trash2, Mail, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountDeletion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-lobster text-primary">iFishing</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-6 text-primary flex items-center">
          <Trash2 className="mr-3 w-8 h-8" /> Exclusão de Conta e Dados
        </h1>

        <p className="text-lg mb-8 text-muted-foreground">
          No <strong>iFishing</strong>, você tem total controle sobre seus dados. Veja abaixo como solicitar a exclusão da sua conta e o que acontece com suas informações.
        </p>

        <section className="space-y-8 text-sm md:text-base leading-relaxed">
          <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary">
              <Mail className="mr-2 w-5 h-5" /> Como solicitar a exclusão (Etapas)
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>Envie um e-mail para <span className="font-bold text-primary">ti@ifishing.com.br</span>.</li>
              <li>No assunto, escreva: <span className="italic">"Solicitação de Exclusão de Conta"</span>.</li>
              <li>No corpo do e-mail, informe o e-mail que você usa para acessar o app <strong>iFishing</strong>.</li>
              <li>Nossa equipe processará o seu pedido em até <strong>7 dias úteis</strong>.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4 flex items-center text-primary">
              <Clock className="mr-2 w-5 h-5" /> Opção no Aplicativo (Em Breve)
            </h2>
            <p className="bg-secondary/10 p-4 rounded-lg border border-secondary/20 italic text-sm">
              Estamos desenvolvendo uma funcionalidade para que você possa excluir sua conta diretamente pelo app em:
              <strong> Perfil {">"} Configurações {">"} Remover conta</strong>. Esta opção estará disponível nas próximas atualizações.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-5 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3 text-red-600">Dados que serão excluídos:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Nome completo e foto de perfil</li>
                <li>E-mail e telefone de contato</li>
                <li>Preferências e configurações da conta</li>
              </ul>
            </div>

            <div className="border p-5 rounded-lg shadow-sm">
              <h3 className="font-bold mb-3 text-orange-600">Dados que podem ser mantidos:</h3>
              <p className="text-sm mb-2">Por obrigações legais e fiscais, alguns dados são retidos por períodos específicos:</p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Registros de transações financeiras (mantidos por 5 anos)</li>
                <li>Logs de acesso (mantidos por 6 meses conforme o Marco Civil da Internet)</li>
              </ul>
            </div>
          </div>

          <div className="pt-8">
            <div className="bg-red-50 border-2 border-red-200 p-6 rounded-xl flex items-start space-x-4">
              <div className="bg-red-100 p-2 rounded-full">
                <Trash2 className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-red-800 font-bold text-lg mb-1">Ação Irreversível</h3>
                <p className="text-red-700">
                  <strong>Atenção:</strong> A exclusão da conta é permanente. Uma vez processada, você perderá acesso a todas as suas <strong>conversas, fotos e histórico completo</strong> no iFishing. Não será possível recuperar esses dados posteriormente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; 2026 iFishing. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default AccountDeletion;
