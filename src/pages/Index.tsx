import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleTelegramClick = () => {
    window.open("https://t.me/Stanis_coach", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center bg-white rounded-xl px-3 py-2 shadow-sm">
            <img 
              src="https://cdn.poehali.dev/files/photo_2025-12-17 15.34.02.jpeg" 
              alt="StaniStudio Logo" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
          <Button onClick={handleTelegramClick} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Написать в Telegram
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary/80 to-destructive relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-6xl relative z-10 animate-fade-in">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                ПОДАРОК КОТОРЫЙ ПОМНЯТ 10 ЛЕТ
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-medium">
                Видео от кумира, фотосессия мечты, оживление фото за 24 часа
              </p>
              <Button 
                onClick={handleTelegramClick}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 font-bold shadow-2xl hover:scale-105 transition-transform"
              >
                Получить подарок
              </Button>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <img 
                  src="https://cdn.poehali.dev/files/photo_2025-12-17 15.39.24.jpeg" 
                  alt="Встреча с кумиром" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground font-bold text-lg px-6 py-3 rounded-xl shadow-xl">
                Реальный результат!
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
            ❌ ОБЫЧНЫЕ ПОДАРКИ ЗАБЫВАЮТ ЧЕРЕЗ НЕДЕЛЮ
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Цветы завянут, шоколад съедят, деньги потратят и забудут.
          </p>
          <Card className="p-8 md:p-12 bg-card border-2 border-accent shadow-lg">
            <blockquote className="text-2xl md:text-3xl font-semibold text-center text-foreground leading-relaxed">
              "Люди помнят 10% что слышат, 25% что видят, но <span className="text-accent">65% что ЧУВСТВУЮТ</span>"
            </blockquote>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Сравнение подарков
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover-scale cursor-pointer border-2 hover:border-destructive transition-colors">
              <div className="text-6xl mb-4">🌹</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Новый год</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Gift" size={20} />
                  <span>Цветы</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="ArrowRight" size={20} />
                  <span>Мусор</span>
                </div>
                <div className="flex items-center gap-2 text-destructive font-semibold">
                  <Icon name="X" size={20} />
                  <span>Никто не помнит</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center hover-scale cursor-pointer border-2 hover:border-destructive transition-colors">
              <div className="text-6xl mb-4">🎈</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">День рождения</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="Gift" size={20} />
                  <span>Украшение</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Icon name="ArrowRight" size={20} />
                  <span>Ящик</span>
                </div>
                <div className="flex items-center gap-2 text-destructive font-semibold">
                  <Icon name="X" size={20} />
                  <span>Забыли</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 text-center hover-scale cursor-pointer border-4 border-accent shadow-2xl bg-accent/5">
              <div className="text-6xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4 text-accent">Нейроподарок</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Icon name="Sparkles" size={20} />
                  <span>Видео от звезды</span>
                </div>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  <Icon name="ArrowRight" size={20} />
                  <span>Плачет</span>
                </div>
                <div className="flex items-center gap-2 text-accent font-bold">
                  <Icon name="Check" size={20} />
                  <span>Помнит 10 лет</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <div className="text-4xl font-bold text-destructive mb-2">73%</div>
              <p className="text-muted-foreground">подарков забивают в ящик</p>
            </Card>
            <Card className="p-6 bg-destructive/10 border-destructive/20">
              <div className="text-4xl font-bold text-destructive mb-2">7 дней</div>
              <p className="text-muted-foreground">средняя жизнь подарка</p>
            </Card>
            <Card className="p-6 bg-accent/10 border-accent/20">
              <div className="text-4xl font-bold text-accent mb-2">10+ лет</div>
              <p className="text-muted-foreground">средняя жизнь видео/фотоподарка</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card 
              className="p-8 hover-scale cursor-pointer border-2 hover:border-accent transition-all"
              onMouseEnter={() => setActiveService("video")}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="text-6xl mb-4 text-center">🎬</div>
              <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Видео с кумиром</h3>
              <p className="text-3xl font-bold text-center mb-4 text-accent">1 500 ₽</p>
              <p className="text-center text-muted-foreground">
                Любой кумир поздравляет личным сообщением
              </p>
            </Card>

            <Card 
              className="p-8 hover-scale cursor-pointer border-2 hover:border-accent transition-all"
              onMouseEnter={() => setActiveService("photo")}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="text-6xl mb-4 text-center">📸</div>
              <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Фотосессия мечты</h3>
              <p className="text-3xl font-bold text-center mb-4 text-accent">3 000 ₽</p>
              <p className="text-center text-muted-foreground">
                10 фото. Как ты видишь себя в снах
              </p>
            </Card>

            <Card 
              className="p-8 hover-scale cursor-pointer border-2 hover:border-accent transition-all"
              onMouseEnter={() => setActiveService("animate")}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="text-6xl mb-4 text-center">🎨</div>
              <h3 className="text-2xl font-bold mb-3 text-center text-foreground">Оживление фото</h3>
              <p className="text-3xl font-bold text-center mb-4 text-accent">500 ₽</p>
              <p className="text-center text-muted-foreground">
                Старое фото оживает
              </p>
            </Card>
          </div>

          <Card className="p-10 bg-gradient-to-r from-accent/20 to-accent/10 border-4 border-accent shadow-2xl">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">💎 Комбо предложение</h3>
              <p className="text-xl mb-6 text-muted-foreground">
                Видео + Фото + Оживление
              </p>
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-3xl line-through text-muted-foreground">5000₽</span>
                <Icon name="ArrowRight" size={32} className="text-accent" />
                <span className="text-5xl font-bold text-accent">3600₽</span>
              </div>
              <p className="text-2xl font-bold text-destructive mb-8">Экономия 30%</p>
              <Button 
                onClick={handleTelegramClick}
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-6 font-bold"
              >
                ПОЛУЧИТЬ КОМБО
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Процесс создания
          </h2>
          <div className="space-y-8">
            {[
              {
                num: "1",
                title: "Напиши заявку",
                desc: "Пиши в Telegram, ответ за 5 минут",
                icon: "MessageSquare"
              },
              {
                num: "2",
                title: "Мы создаём",
                desc: "Подарок 4K качество за 24-48 часов",
                icon: "Sparkles"
              },
              {
                num: "3",
                title: "Ты проверяешь",
                desc: "Черновик, правки бесплатно",
                icon: "Eye"
              },
              {
                num: "4",
                title: "Ты даришь",
                desc: "Финальный файл, люди плачут",
                icon: "Heart"
              }
            ].map((step, idx) => (
              <Card key={idx} className="p-8 flex items-center gap-6 hover-scale border-2 hover:border-accent transition-all animate-fade-in">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent border-4 border-destructive flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">{step.num}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                  <p className="text-lg text-muted-foreground">{step.desc}</p>
                </div>
                <Icon name={step.icon as any} size={48} className="text-accent flex-shrink-0" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Частые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                Это реально? Как ты это делаешь?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Используем современные технологии искусственного интеллекта для создания персонализированного контента. 
                Все видео и фото создаются с нуля на основе ваших пожеланий в высоком качестве 4K.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                24 часа — реально?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Да! Стандартный срок 24-48 часов. Если нужно срочно — можем сделать за 12 часов с доплатой. 
                Работаем без выходных и праздников.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                Что если не понравится?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Отправляем черновик на согласование. Вы можете запросить правки — они бесплатны! 
                Работаем до полного результата. Гарантируем 100% удовлетворённость.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-xl font-semibold hover:text-accent">
                Цена дешевая — качество хорошее?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                Мы автоматизировали процесс создания, поэтому можем держать доступные цены. 
                Качество всегда 4K, с профессиональной озвучкой и визуализацией. Посмотрите отзывы наших клиентов!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Доказательства
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="p-8 text-center bg-accent/10 border-accent/20">
              <div className="text-5xl font-bold text-accent mb-2">100+</div>
              <p className="text-muted-foreground font-semibold">видео создано</p>
            </Card>
            <Card className="p-8 text-center bg-accent/10 border-accent/20">
              <div className="text-5xl font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground font-semibold">довольны</p>
            </Card>
            <Card className="p-8 text-center bg-accent/10 border-accent/20">
              <div className="text-5xl font-bold text-accent mb-2">48h</div>
              <p className="text-muted-foreground font-semibold">гарантия</p>
            </Card>
            <Card className="p-8 text-center bg-accent/10 border-accent/20">
              <div className="text-5xl font-bold text-accent mb-2">4.9</div>
              <p className="text-muted-foreground font-semibold">★★★★★</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Анна, 28 лет",
                rating: 5,
                text: "Заказала видео от любимого актёра на день рождения мужа. Он плакал от счастья! Спасибо StaniStudio за незабываемый подарок!"
              },
              {
                name: "Дмитрий, 35 лет",
                rating: 5,
                text: "Оживили старое фото бабушки — вся семья была в шоке. Качество невероятное, как будто она снова с нами."
              },
              {
                name: "Елена, 42 года",
                rating: 5,
                text: "Фотосессия мечты превзошла все ожидания! Увидела себя совершенно по-новому. Рекомендую всем!"
              },
              {
                name: "Сергей, 31 год",
                rating: 5,
                text: "Быстро, качественно, доступно. Комбо пакет — отличное решение. Подруга до сих пор пересматривает видео каждый день."
              }
            ].map((review, idx) => (
              <Card key={idx} className="p-8 hover-scale border-2 hover:border-accent transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="User" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{review.name}</h4>
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-accent fill-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ещё не решился?
          </h2>
          <p className="text-2xl text-white/90 mb-10">
            Забронируй бесплатную консультацию
          </p>
          <Button 
            onClick={handleTelegramClick}
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-12 py-7 font-bold shadow-2xl hover:scale-105 transition-transform"
          >
            Получить консультацию
          </Button>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-accent">StaniStudio</h3>
              <p className="text-white/70">
                Сделано с ❤️ для людей которые ценят эмоции
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <p>Telegram: @Stanis_coach</p>
                <p>WhatsApp: +7 (914) 704 41 72</p>
                <p>Email: stanislavtsybulskiy03@gmail.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Социальные сети</h4>
              <div className="flex gap-4">
                <a href="https://t.me/Stanis_coach" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Send" size={20} className="text-accent-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Youtube" size={20} className="text-accent-foreground" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Instagram" size={20} className="text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024-2025 StaniStudio. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;