import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Fish, MapPin, Calendar, CreditCard, Star, Users, Shield, Target } from "lucide-react";

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
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-accent to-secondary text-white">
            🎣 Revolucionando a Pesca no Brasil
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Conectamos Guias de Pesca a Pescadores
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A plataforma que liberta guias de pesca da dependência de pousadas e intermediários, 
            oferecendo autonomia, visibilidade e ferramentas modernas para aumentar suas diárias.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              Em Breve no App Store <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-white">
              Em Breve no Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">O Problema dos Guias de Pesca</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guias enfrentam desafios significativos que limitam seu crescimento e autonomia profissional.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Dependência de Pousadas</CardTitle>
                <CardDescription>
                  Altas comissões reduzem drasticamente a margem de lucro dos guias.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-l-secondary bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-secondary">Baixa Visibilidade</CardTitle>
                <CardDescription>
                  Falta de presença digital impede o alcance de novos clientes.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-l-4 border-l-accent bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-accent">Pagamentos Limitados</CardTitle>
                <CardDescription>
                  Ausência de opções de pagamento modernas afasta potenciais clientes.
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
            <Card className="text-center bg-gradient-to-b from-primary/10 to-primary/5 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-primary">Perfil Personalizado</CardTitle>
                <CardDescription>
                  Guias criam perfis com experiência, serviços e avaliações.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-gradient-to-b from-secondary/10 to-secondary/5 border-secondary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-secondary">Mapeamento</CardTitle>
                <CardDescription>
                  Pescadores encontram guias por região e preferências.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-gradient-to-b from-accent/10 to-accent/5 border-accent/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-accent">Agendamento</CardTitle>
                <CardDescription>
                  Sistema de reservas online com disponibilidade em tempo real.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="text-center bg-gradient-to-b from-primary/10 to-accent/5 border-primary/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
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
                  Liberte-se de intermediários e pousadas. Gerencie seus clientes e diárias de forma independente.
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
      <section className="py-20 px-4 bg-gradient-to-r from-primary via-secondary to-accent text-white">
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Fish className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-primary">iFishing</span>
              </div>
              <p className="text-muted-foreground">
                A plataforma que conecta guias de pesca a pescadores em todo o Brasil.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Guias</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Criar Perfil</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Gerenciar Diárias</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Dicas</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Para Pescadores</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Encontrar Guias</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Regiões</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Avaliações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
              </ul>
            </div>
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