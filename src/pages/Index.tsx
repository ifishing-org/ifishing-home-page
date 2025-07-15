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

      {/* Contato Section */}
      <section id="contato" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-primary">Entre em Contato</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fale conosco para mais informações sobre o iFishing.
            </p>
          </div>
          
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <span className="text-lg">ti@ifishing.com.br</span>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="https://instagram.com/ifishing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <span>Instagram</span>
              </a>
              
              <a href="https://facebook.com/ifishing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span>Facebook</span>
              </a>
            </div>
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