import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./components/Error.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./routes/homepage/Home.jsx";
import LoadingPage from "./components/LoadingPage.jsx";
import SubPage from "./routes/subpage/SubPage.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3300);
    console.log.apply(console, [
      "%c Designed and Coded by Laura Głąb",
      "color: white" +
        "; background: padding:5px 0; border-radius: 5px; font-weight: bold; background-color: #897455;",
    ]);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  const pages = [
    {
      path: "/prawo-cywilne",
      title: "Prawo Cywilne",
      description:
        "W mojej kancelarii zajmuję się kompleksową obsługą spraw z zakresu prawa cywilnego, w tym sporządzaniem i analizą umów, dochodzeniem roszczeń oraz reprezentacją klientów w postępowaniach sądowych. Pomagam w rozwiązywaniu sporów dotyczących zobowiązań, odszkodowań oraz ochrony dóbr osobistych. Moim celem jest zapewnienie skutecznej ochrony praw klientów oraz wsparcie w negocjacjach i mediacjach.",
      subTitle: "Moja pomoc w zakresie prawa cywilnego obejmuje:",
      ulSubpage: [
        "sporządzanie i opiniowanie umów cywilnoprawnych,",
        "doradztwo w sprawach dotyczących praw własności oraz zobowiązań,",
        "prowadzenie spraw sądowych związanych z dochodzeniem roszczeń cywilnych,",
        "reprezentację klientów w sprawach o odszkodowania i zadośćuczynienia,",
        "pomoc w sprawach spadkowych,podziału majątku oraz ustalania praw do nieruchomości,",
        "mediacje i negocjacje mające na celu polubowne rozwiązywanie sporów.",
      ],
    },
    {
      path: "/prawo-rodzinne",
      title: "Prawo Rodzinne",
      description:
        "W mojej kancelarii prowadzę sprawy o rozwód, separację oraz podział majątku, dbając o interesy moich klientów na każdym etapie postępowania. Udzielam wsparcia w sprawach dotyczących władzy rodzicielskiej, ustalania kontaktów z dziećmi oraz alimentów. Dodatkowo, pomagam w rozwiązywaniu sporów związanych z ustaleniem lub zaprzeczeniem ojcostwa oraz reprezentuję klientów w procesach adopcyjnych.",
      subTitle: "Moja pomoc w zakresie prawa rodzinnego obejmuje:",
      ulSubpage: [
        "prowadzenie spraw o rozwód, separację oraz podział majątku,",
        "doradztwo i reprezentację w sprawach dotyczących władzy rodzicielskiej oraz ustalania kontaktów z dziećmi,",
        "pomoc w sprawach alimentacyjnych, w tym dochodzenie i egzekwowanie alimentów,",
        "reprezentację klientów w sprawach o odszkodowania i zadośćuczynienia,",
        "rozwiązywanie spraw związanych z ustaleniem lub zaprzeczeniem ojcostwa,",
        "wsparcie w procesach adopcyjnych oraz pieczy zastępczej,",
        "mediacje rodzinne mające na celu polubowne rozwiązywanie konfliktów.",
      ],
    },
    {
      path: "/prawo-gospodarcze",
      title: "Prawo Gospopdarcze",
      description:
        "W mojej kancelarii zajmuję się doradztwem przy zakładaniu, przekształcaniu oraz likwidacji spółek, a także przygotowuję umowy handlowe dostosowane do potrzeb klientów. Reprezentuję przedsiębiorców w sporach gospodarczych przed sądami oraz w negocjacjach z partnerami biznesowymi. Ponadto, wspieram klientów w sprawach dotyczących odpowiedzialności członków zarządu i ochrony tajemnicy przedsiębiorstwa.",
      subTitle: "Moja pomoc w zakresie prawa gospodarczego obejmuje:",
      ulSubpage: [
        "doradztwo przy zakładaniu, przekształcaniu oraz likwidacji spółek i innych form działalności gospodarczej,",
        "sporządzanie i opiniowanie umów handlowych, w tym kontraktów z partnerami biznesowymi,",
        "reprezentację w sporach gospodarczych przed sądami i arbitrażem,",
        "wsparcie w negocjacjach i mediacjach dotyczących sporów biznesowych,",
        "pomoc w sprawach dotyczących odpowiedzialności członków zarządu i organów spółek,",
        "doradztwo w zakresie prawa konkurencji, ochrony tajemnicy przedsiębiorstwa oraz zwalczania nieuczciwej konkurencji.",
      ],
    },
    {
      path: "/prawo-danych",
      title: "Prawo Ochrony Danych Osobowych",
      description:
        "W mojej kancelarii zajmuję się doradztwem w zakresie zgodności z przepisami RODO oraz krajowymi regulacjami dotyczącymi ochrony danych osobowych. Pomagam klientom w przygotowywaniu i wdrażaniu polityk ochrony danych oraz przeprowadzam audyty, aby ocenić ryzyko związane z przetwarzaniem danych. Reprezentuję również klientów w postępowaniach przed organami nadzoru, w tym przed Prezesem Urzędu Ochrony Danych Osobowych.",
      subTitle:
        "Moja pomoc w zakresie prawa ochrony danych osobowych obejmuje:",
      ulSubpage: [
        "doradztwo w zakresie zgodności z przepisami RODO oraz krajowymi regulacjami dotyczącymi ochrony danych osobowych,",
        "przygotowywanie i wdrażanie polityk ochrony danych osobowych, procedur oraz klauzul informacyjnych,",
        "prowadzenie audytów wewnętrznych i oceny ryzyka związanego z przetwarzaniem danych,",
        "reprezentację przed organami nadzoru, w tym przed Prezesem Urzędu Ochrony Danych Osobowych (UODO),",
        "wsparcie w procesach zgłaszania naruszeń ochrony danych osobowych oraz zarządzania incydentami,",
        "szkolenia dla pracowników i kadry zarządzającej w zakresie ochrony danych osobowych.",
      ],
    },
    {
      path: "/prawo-pracy",
      title: "Prawo Pracy",
      description:
        "W mojej kancelarii zajmuję się doradztwem w sprawach dotyczących nawiązywania i rozwiązywania umów o pracę, w tym sporami o niezgodne z prawem zwolnienia. Reprezentuję klientów w postępowaniach dotyczących mobbingu, dyskryminacji oraz innych naruszeń praw pracowniczych. Dodatkowo, przygotowuję i opiniuję regulaminy pracy oraz wspieram przedsiębiorców w kwestiach związanych z reorganizacją zakładów pracy i zwolnieniami grupowymi.",
      subTitle: "Moja pomoc w zakresie prawa pracy obejmuje:",
      ulSubpage: [
        "doradztwo w sprawach dotyczących nawiązywania, zmiany i rozwiązywania umów o pracę,",
        "reprezentację w sporach pracowniczych, w tym w sprawach o przywrócenie do pracy i odszkodowania,",
        "pomoc w sporach dotyczących mobbingu, dyskryminacji oraz innych naruszeń praw pracowniczych,",
        "sporządzanie oraz opiniowanie regulaminów pracy, wynagrodzeń i innych dokumentów wewnętrznych,",
        "wsparcie w sprawach związanych z czasem pracy, wynagrodzeniem oraz urlopami,",
        "mediacje i negocjacje mające na celu polubowne rozwiązywanie sporów.",
      ],
    },
    {
      path: "/prawo-nieruchomosci",
      title: "Prawo Nieruchomości",
      description:
        "W mojej kancelarii zajmuję się doradztwem prawnym przy transakcjach dotyczących zakupu, sprzedaży oraz najmu nieruchomości, dbając o zgodność z przepisami prawa. Reprezentuję klientów w sporach dotyczących prawa własności, zasiedzenia oraz zniesienia współwłasności. Dodatkowo, pomagam w sprawach związanych z użytkowaniem wieczystym, służebnościami oraz roszczeniami wynikającymi z naruszenia prawa do nieruchomości.",
      subTitle: "Moja pomoc w zakresie prawa nieruchomości obejmuje:",
      ulSubpage: [
        "doradztwo prawne przy zakupie, sprzedaży oraz najmie nieruchomości,",
        "sporządzanie i opiniowanie umów deweloperskich, sprzedaży oraz najmu,",
        "pomoc w sprawach dotyczących użytkowania wieczystego, służebności oraz hipotek,",
        "reprezentację w sprawach związanych z prawem własności, zasiedzeniem oraz zniesieniem współwłasności,",
        "wsparcie w postępowaniach dotyczących roszczeń o naruszenie posiadania lub prawa do nieruchomości,",
        "prowadzenie spraw związanych z inwestycjami budowlanymi oraz zagospodarowaniem przestrzennym.",
      ],
    },
  ];

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {pages.map((page, index) => (
            <Route
              key={index}
              path={page.path}
              element={
                <SubPage
                  title={page.title}
                  description={page.description}
                  subTitle={page.subTitle}
                  items={page.ulSubpage}
                />
              }
            />
          ))}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
