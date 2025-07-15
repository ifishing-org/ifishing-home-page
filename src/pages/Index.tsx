import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Fish, MapPin, Calendar, CreditCard, Star, Users, Shield, Target } from "lucide-react";
import heroImage from "../assets/hero-fishing.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary">iFishing</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#como-funciona" className="text-muted-foreground hover:text-primary transition-colors">Como Funciona</a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">Benefícios</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/90 text-white backdrop-blur-sm">
            🎣 Revolucionando a Pesca no Brasil
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Conectamos Guias de Pesca a Pescadores
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            A plataforma que oferece aos guias de pesca maior autonomia, visibilidade e 
            ferramentas modernas para aumentar suas diárias e expandir seu negócio.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 text-white">
              Em Breve na App Store e Google Play <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Desafios dos Guias de Pesca</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guias enfrentam desafios que limitam seu crescimento e autonomia profissional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Maior Autonomia</CardTitle>
                <CardDescription>
                  Oportunidade de trabalhar de forma independente com maior controle sobre as diárias.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-l-secondary bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-secondary">Visibilidade Digital</CardTitle>
                <CardDescription>
                  Necessidade de presença digital para alcançar novos clientes e expandir o negócio.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-l-accent bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-accent">Pagamentos Modernos</CardTitle>
                <CardDescription>
                  Importância de oferecer opções de pagamento modernas para atrair mais clientes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section id="como-funciona" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Como Funciona</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma plataforma simples e eficiente que conecta guias e pescadores de forma direta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Perfil Personalizado</CardTitle>
                <CardDescription>
                  Guias criam perfis com experiência, serviços e avaliações.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Mapeamento</CardTitle>
                <CardDescription>
                  Pescadores encontram guias por região e preferências.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Agendamento</CardTitle>
                <CardDescription>
                  Sistema de reservas online com disponibilidade em tempo real.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Pagamento</CardTitle>
                <CardDescription>
                  Pagamentos seguros com parcelamento e cartão de crédito.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section id="beneficios" className="py-20 px-4 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Benefícios da Plataforma</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transforme sua atividade de guia de pesca com ferramentas profissionais e modernas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-primary">Autonomia Total</CardTitle>
                <CardDescription>
                  Trabalhe de forma independente com total controle sobre seus clientes e diárias.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-secondary/20">
              <CardHeader>
                <Shield className="w-12 h-12 text-secondary mb-4" />
                <CardTitle className="text-secondary">Pagamentos Seguros</CardTitle>
                <CardDescription>
                  Receba pagamentos com segurança, incluindo parcelamento e cartão de crédito.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-accent/20">
              <CardHeader>
                <MapPin className="w-12 h-12 text-accent mb-4" />
                <CardTitle className="text-accent">Maior Visibilidade</CardTitle>
                <CardDescription>
                  Alcance pescadores de todo o Brasil, não apenas da sua região.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20">
              <CardHeader>
                <Star className="w-12 h-12 text-primary mb-4" />
                <CardTitle className="text-primary">Reputação Online</CardTitle>
                <CardDescription>
                  Construa sua reputação com sistema de avaliações e feedbacks dos clientes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Lançamento Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Aplicativo em Desenvolvimento</h2>
          <p className="text-xl mb-8 opacity-90">
            O iFishing está sendo desenvolvido e em breve estará disponível para download nas lojas de aplicativos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Badge className="bg-white/20 text-white">
              🚀 Lançamento em Breve
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center space-x-2 mb-4 justify-center">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">iFishing</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A plataforma que conecta guias de pesca a pescadores em todo o Brasil.
            </p>
          </div>
          <div className="border-t pt-8 mt-8 text-center text-muted-foreground">
            <p>&copy; 2024 iFishing. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;