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

        <h1 className="text-3xl font-bold mb-6 text-primary">Política de Privacidade</h1>
        <p className="text-muted-foreground mb-4">Última atualização: 22 de Abril de 2026</p>

        <section className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">1. Introdução</h2>
            <p>
              O iFishing ("nós", "nosso") está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações ao utilizar nosso aplicativo móvel e serviços relacionados.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">2. Informações que Coletamos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Informações do Perfil:</strong> Nome, e-mail e foto para identificação no sistema.</li>
              <li><strong>Localização:</strong> Coletamos dados de localização para ajudar pescadores a encontrarem guias próximos e para o mapeamento de pontos de pesca.</li>
              <li><strong>Dados de Transação:</strong> Detalhes básicos sobre reservas e pagamentos realizados através da plataforma.</li>
              <li><strong>Informações do Dispositivo:</strong> Modelo do aparelho, sistema operacional e identificadores únicos para melhorar a performance do app.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">3. Uso das Informações</h2>
            <p>Utilizamos os dados coletados para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Conectar pescadores a guias de pesca.</li>
              <li>Processar agendamentos e pagamentos.</li>
              <li>Enviar notificações sobre suas reservas.</li>
              <li>Melhorar continuamente a experiência do usuário e a segurança da plataforma.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos seus dados pessoais. Compartilhamos informações apenas com os guias (para realizar a pescaria contratada) e com processadores de pagamento seguros. Podemos compartilhar dados anônimos para fins de análise estatística.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">5. Segurança</h2>
            <p>
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">6. Seus Direitos</h2>
            <p>
              Você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento através das configurações do aplicativo ou entrando em contato conosco.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-primary">7. Contato</h2>
            <p>
              Para dúvidas sobre esta política, entre em contato através do e-mail: <span className="font-semibold">ti@ifishing.com.br</span>
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
