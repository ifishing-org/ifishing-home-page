import { Button } from "@/components/ui/button";
import { Fish, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
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

        <h1 className="text-3xl font-bold mb-6 text-primary">Política de Privacidade - iFishing</h1>
        <p className="text-muted-foreground mb-8">Data da última atualização: 21 de abril de 2026</p>

        <section className="space-y-8 text-sm md:text-base leading-relaxed">
          <p>
            O iFishing ("nós", "nosso"), como controlador dos dados, respeita a sua privacidade. Esta política descreve como tratamos seus dados em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">1. Dados Coletados e Base Legal</h2>
            <p className="mb-4">Coletamos dados estritamente necessários para oferecer nossos serviços:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Dados Cadastrais:</strong> Nome, e-mail e telefone. <br/>
                <span className="text-muted-foreground italic">Base Legal: Execução de contrato (necessários para a prestação do serviço de reservas e uso da plataforma).</span>
              </li>
              <li>
                <strong>Permissão de Câmera:</strong> Acesso à câmera para fotos de perfil/guia. <br/>
                <span className="text-muted-foreground italic">Base Legal: Consentimento (você autoriza o uso no momento da captura).</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">2. Finalidade do Tratamento</h2>
            <p className="mb-2">Utilizamos seus dados para:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Identificar você na plataforma;</li>
              <li>Permitir a comunicação entre usuários e guias;</li>
              <li>Gerenciar sua conta e preferências.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">3. Compartilhamento e Armazenamento</h2>
            <p>
              Não compartilhamos, vendemos ou alugamos dados para terceiros. Seus dados são armazenados apenas pelo tempo necessário para a manutenção da sua conta no iFishing. Ao excluir sua conta, seus dados são removidos de nossos registros, exceto quando precisamos mantê-los para cumprimento de obrigações legais.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">4. Seus Direitos (LGPD)</h2>
            <p className="mb-2">Você, como titular dos dados, possui os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Acesso:</strong> Solicitar uma cópia dos dados que possuímos sobre você.</li>
              <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou inexatos.</li>
              <li><strong>Exclusão:</strong> Solicitar a exclusão definitiva dos seus dados.</li>
              <li><strong>Portabilidade:</strong> Solicitar a transferência dos seus dados para outro fornecedor.</li>
              <li><strong>Revogação de Consentimento:</strong> Retirar a autorização para o uso da câmera a qualquer momento.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">5. Segurança e Contato</h2>
            <p>
              Adotamos medidas técnicas para proteger seus dados. Para exercer seus direitos ou tirar dúvidas, entre em contato com nosso Encarregado de Dados (DPO) através do e-mail: <span className="font-semibold text-primary">ti@ifishing.com.br</span>
            </p>
          </div>
        </section>

        <footer className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
          <p>&copy; 2026 iFishing. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
