 import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [tariff, setTariff] = useState("BASIC");

const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("requests") || "[]");
    setRequests(data);
  }, []);

  const sendRequest = () => {
    if (!name || !phone) return;

    const newReq = {
      name,
      phone,
      tariff,
      date: new Date().toLocaleString(),
    };

    const updated = [newReq, ...requests];
    setRequests(updated);
    localStorage.setItem("requests", JSON.stringify(updated));

    const msg = `Здравствуйте! Хочу записаться.%0AИмя: ${name}%0AТел: ${phone}%0AТариф: ${tariff}`;

    window.open(`https://wa.me/77718675422?text=${msg}`, "_blank");

    setOpen(false);
    setName("");
    setPhone("");
  };

  return (
    <div className="page">

      <div className="goldLight"></div>

      {/* HEADER */}
      <header className="topbar">
        <div className="logo">TEAM RESET</div>
      </header>

      {/* HERO */}
      <section className="section">
        <h1>Инвестиция в результат бизнеса</h1>
        <p>Деньги — это система решений внутри команды</p>
      </section>

      {/* ABOUT */}
      <section className="section">
        <h2>О нас</h2>
        <p>
          Team Reset — система диагностики и трансформации команд.
        </p>
      </section>

{/* PROBLEMS */}
<section className="section">

  <h2 className="goldTitle">Проблемы бизнеса</h2>

  <div className="grid">

    <div className="card">
      <h3>Кассовый разрыв</h3>
      <p>Деньги есть, но ими невозможно пользоваться вовремя.</p>
    </div>

    <div className="card">
      <h3>Нет стабильного дохода</h3>
      <p>Доход не системный, а случайный.</p>
    </div>

    <div className="card">
      <h3>Нет масштабирования</h3>
      <p>Рост требует постоянного участия руководителя.</p>
    </div>

    <div className="card">
      <h3>Зависимость от владельца</h3>
      <p>Команда не берёт ответственность и решения на себя.</p>
    </div>

    <div className="card">
      <h3>Скрытый саботаж</h3>
      <p>Проблемы внутри системы, а не на рынке.</p>
    </div>

  </div>
</section>

      {/* CASES */}
      <section className="section">

        <h2>Кейсы трансформации</h2>

        <div className="card caseCard">

          <div className="bigNumber smallGold">
            1 000 000 000 ₸
          </div>

          <p className="caseDesc">
            Прибыль за 6 месяцев сопровождения
          </p>

          <div className="caseBox">
            <h3>ПРОБЛЕМА</h3>
            <p>Долги, хаос, зависимость от владельца</p>
          </div>

          <div className="caseBox">
            <h3>ПРОЦЕСС</h3>
            <p>Диагностика системы и работа с командой</p>
          </div>

          <div className="caseBox">
            <h3>РЕЗУЛЬТАТ</h3>
            <p>Системный рост и прибыль > 1 млрд ₸</p>
          </div>

        </div>

        {/* CASE 2 */}
        <div className="card caseCard">

          <div className="bigNumber smallGold">
            +42% дохода
          </div>

          <p className="caseDesc">
            Рост эффективности команды
          </p>

          <div className="caseBox">
            <h3>ПРОБЛЕМА</h3>
            <p>Нестабильные продажи</p>
          </div>

          <div className="caseBox">
            <h3>РЕШЕНИЕ</h3>
            <p>Перераспределение ответственности</p>
          </div>

          <div className="caseBox">
            <h3>РЕЗУЛЬТАТ</h3>
            <p>Стабильный рост дохода</p>
          </div>

        </div>

        {/* CASE 3 */}
        <div className="card caseCard">

          <div className="bigNumber smallGold">
            -70% конфликтов
          </div>

          <p className="caseDesc">
            Снижение напряжения внутри команды
          </p>

          <div className="caseBox">
            <h3>ПРОБЛЕМА</h3>
            <p>Конфликты между отделами</p>
          </div>

          <div className="caseBox">
            <h3>РЕШЕНИЕ</h3>
            <p>Работа с коммуникацией</p>
          </div>

          <div className="caseBox">
            <h3>РЕЗУЛЬТАТ</h3>
            <p>Спокойная и управляемая команда</p>
          </div>

        </div>

      </section>

    {/* TARIFS */}
<section className="section">
  <h2>Тарифы</h2>

  <div className="grid">

    {/* BASIC */}
    <div className="card">
      <h3>BASIC</h3>
      <p>180 000 ₸ / чел</p>

      <ul>
        <li>Групповая работа с куратором</li>
        <li>Базовая психодиагностика (5 тестов)</li>
        <li>Оценка состояния команды</li>
        <li>Стратегическая Т-игра</li>
        <li>Расстановки до 5 человек</li>
        <li>Рекомендации руководителю</li>
      </ul>

      <button onClick={() => { setTariff("BASIC"); setOpen(true); }}>
        Выбрать BASIC
      </button>
    </div>

    {/* PRO */}
    <div className="card">
      <h3>PRO</h3>
      <p>250 000 ₸ / чел</p>

      <ul>
        <li>Групповая работа с куратором</li>
        <li>Расширенная психодиагностика (5+ тестов)</li>
        <li>Ежемесячные тестирования</li>
        <li>Работа с ответственностью команды</li>
        <li>Стратегическая Т-игра</li>
        <li>Расстановочный день</li>
        <li>Разбор командных конфликтов</li>
        <li>Работа с коммуникацией внутри команды</li>
        <li>Рекомендации руководителю</li>
      </ul>

      <button onClick={() => { setTariff("PRO"); setOpen(true); }}>
        Выбрать PRO
      </button>
    </div>

    {/* VIP */}
    <div className="card vip">
      <h3>VIP</h3>
      <p>380 000 ₸ / чел</p>

      <ul>
        <li>Полная психодиагностика</li>
        <li>Ежемесячные тестирования</li>
        <li>Сопровождение психологом</li>
        <li>Сопровождение куратором</li>
        <li>Работа с динамикой команды</li>
        <li>Эмоциональная сепарация</li>
        <li>Стратегические Т-игры</li>
        <li>Расстановки 1 раз в 2 месяца</li>
        <li>Работа с выгоранием</li>
        <li>Работа с лидерством</li>
        <li>Работа с делегированием</li>
        <li>Стратегические встречи с собственником</li>
        <li>Финальный аналитический отчёт</li>
      </ul>

      <button onClick={() => { setTariff("VIP"); setOpen(true); }}>
        Выбрать VIP
      </button>
    </div>
  </div>
</section>

 <section className="section">
  <h2 className="goldTitle">Отзывы клиентов</h2>

  <div className="grid">

    <div className="card">
      <p className="reviewText">
        “После диагностики команда перестала терять деньги. Стало понятно, где реальная проблема в системе.”
      </p>
      <div className="reviewAuthor">— CEO, строительный бизнес</div>
    </div>

    <div className="card">
      <p className="reviewText">
        “Мы убрали хаос в управлении. Руководитель перестал тянуть всё на себе.”
      </p>
      <div className="reviewAuthor">— Основатель e-commerce проекта</div>
    </div>

    <div className="card">
      <p className="reviewText">
        “Рост выручки пошёл уже в первый месяц. Команда стала работать как система, а не как люди по отдельности.”
      </p>
      <div className="reviewAuthor">— Руководитель отдела продаж</div>
    </div>

  </div>
</section>


      {/* CTA */}
      <section className="section">
        <h2>Готовы начать?</h2>

        <button onClick={() => setOpen(true)}>
          Оставить заявку
        </button>

        <button onClick={() =>
          window.open("https://wa.me/77718675422?text=Здравствуйте!", "_blank")
        }>
          WhatsApp
        </button>
      </section>


      {/* MODAL */}
      {open && (
        <div className="modalOverlay" onClick={() => setOpen(false)}>
          <div className="modalBox" onClick={(e) => e.stopPropagation()}>

            <h2>Заявка</h2>

            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="WhatsApp" />

            <select value={tariff} onChange={(e) => setTariff(e.target.value)}>
              <option>BASIC</option>
              <option>PRO</option>
              <option>VIP</option>
            </select>

            <button onClick={sendRequest}>
              Отправить
            </button>

            <button onClick={() => setOpen(false)}>
              Закрыть
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
