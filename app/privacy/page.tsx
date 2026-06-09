export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#D89A68] text-black">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-10">
          Adatvédelmi tájékoztató
        </h1>

        <div className="space-y-8 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-2">1. Adatkezelő</h2>
            <p>
              Az adatkezelő a TenderAI szolgáltatás üzemeltetője (a továbbiakban: „mi" vagy „Adatkezelő").
              Elérhetőség: <a href="mailto:info@tenderai.hu" className="underline">info@tenderai.hu</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">2. Milyen adatokat gyűjtünk?</h2>
            <p>A kérdőív kitöltése során az alábbi adatokat kérjük el:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Tevékenység típusa</strong> – mivel foglalkozik a céged</li>
              <li><strong>Alkalmazottak száma</strong> – a cég méretének felmérésére</li>
              <li><strong>Havi költségkeret</strong> – mennyit fizetnél a szolgáltatásért</li>
              <li><strong>E-mail cím</strong> – hogy értesíteni tudjunk az indulásról</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">3. Miért kezeljük ezeket az adatokat?</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Piackutatás és az érdeklődés felmérése</li>
              <li>Értesítés küldése a szolgáltatás indulásáról</li>
            </ul>
            <p className="mt-2">
              Az adatkezelés jogalapja: hozzájárulásod (GDPR 6. cikk (1) bek. a) pont).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">4. Meddig őrizzük meg az adatokat?</h2>
            <p>
              Adataidat a TenderAI elindulásától számított legfeljebb 1 évig tároljuk, vagy amíg visszavonod a hozzájárulásodat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">5. Átadjuk-e másoknak az adataidat?</h2>
            <p>
              Adataidat harmadik félnek nem adjuk el. Tárhelyszolgáltatónk kizárólag az általunk meghatározott célra férhet hozzá az adatokhoz.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-2">6. Jogaid</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Hozzáférés</strong> – kérheted, milyen adatot tárolunk rólad</li>
              <li><strong>Helyesbítés</strong> – kérheted a hibás adatok javítását</li>
              <li><strong>Törlés</strong> – kérheted az adataid törlését</li>
              <li><strong>Visszavonás</strong> – bármikor visszavonhatod a hozzájárulásodat</li>
              <li><strong>Panasz</strong> – fordulhatsz a NAIH-hoz (<a href="https://www.naih.hu" className="underline" target="_blank" rel="noopener noreferrer">naih.hu</a>)</li>
            </ul>
            <p className="mt-2">
              Kéréseidet ide küldd: <a href="tenderai.official@gmail.com" className="underline">tenderai.official@gmail.com</a>
            </p>
          </section>
        </div>

        <p className="mt-12 text-sm text-black/50">Utolsó frissítés: 2025. június</p>
      </div>
    </main>
  );
}