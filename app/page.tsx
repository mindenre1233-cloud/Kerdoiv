"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [step, setStep] = useState(0);

  const [data, setData] = useState({
    businessType: "",
    employees: "",
    budget: "",
    email: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cookieChoice = "accepted";

  const formatNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");

    if (!numbers) return "";

    return Number(numbers).toLocaleString("hu-HU");
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const next = async () => {
    if (step === 1 && data.businessType.trim().length < 3) return;
    if (step === 2 && Number(data.employees) < 1) return;
    if (step === 3 && Number(data.budget) < 1) return;
    if (step === 4 && !isValidEmail(data.email)) return;

    if (step === 4) {
      setSubmitError("");
      setIsSubmitting(true);

      try {
        if (cookieChoice === "accepted") {
          const response = await fetch("/api/responses", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Save failed");
          }
        }

        setStep(5);
      } catch {
        setSubmitError("Nem sikerült menteni a válaszokat. Próbáld újra.");
      } finally {
        setIsSubmitting(false);
      }

      return;
    }

    setStep((prev) => prev + 1);
  };


  const back = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  const progress = (step / 4) * 100;

  return (
    <main className="min-h-screen bg-[#D89A68] text-black">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Progress */}
        {step > 0 && step < 5 && (
          <div className="mb-16">
            <div className="h-2 bg-[#c78550] rounded-full overflow-hidden">
              <div
                className="h-full bg-black transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-2 text-sm font-semibold">
              {step}/4 kérdés
            </div>
          </div>
        )}

        {/* START */}
        {step === 0 && (
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-20">
              Eleged van abból hogy órákat töltesz
              <br />
              tenderek keresésével?
            </h1>

            <button
              onClick={() => setStep(1)}
              className="bg-black text-white px-8 py-3 rounded-xl font-bold"
            >
              Kérdőív kitöltése
            </button>
            <p className="mt-4 text-sm text-black/70">
  A kérdőív elküldésével elfogadod és elolvastad az{" "}
  <Link
    href="/privacy"
    className="text-blue-800 underline underline-offset-2 font-semibold hover:text-blue-900"
  >
    adatvédelmi tájékoztatót
  </Link>
  , és hozzájárulsz adataid kezeléséhez.
            </p>
          </div>
        )}

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8">
              Mivel foglalkozik a céged? *
            </h1>

            <input
              autoFocus
              value={data.businessType}
              onChange={(e) =>
                setData({
                  ...data,
                  businessType: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  data.businessType.trim().length >= 3
                ) {
                  next();
                }
              }}
              placeholder="Pl. Tetőfedő, Útépítés, Felújítás..."
              className="w-full max-w-xl h-14 rounded-xl border border-[#B87C4B] bg-[#E7C7AA] px-4 text-lg text-black placeholder:text-black/60"
            />

            {data.businessType.length > 0 &&
              data.businessType.trim().length < 3 && (
                <p className="text-red-700 mt-2">
                  Minimum 3 karakter szükséges.
                </p>
              )}

            <button
              onClick={next}
              disabled={data.businessType.trim().length < 3}
              className="block mt-8 bg-black text-white px-8 py-3 rounded-xl font-bold disabled:opacity-40"
            >
              Következő →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <button
              onClick={back}
              className="mb-8 font-semibold"
            >
              ← Vissza
            </button>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Hány főt számlál a céged? *
            </h2>

            <input
              autoFocus
              type="number"
              min="1"
              value={data.employees}
              onChange={(e) => {
                const value = e.target.value;

                if (
                  value === "" ||
                  Number(value) >= 1
                ) {
                  setData({
                    ...data,
                    employees: value,
                  });
                }
              }}
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  Number(data.employees) >= 1
                ) {
                  next();
                }
              }}
              placeholder="Pl. 15"
              className="w-full max-w-xl h-14 rounded-xl border border-[#B87C4B] bg-[#E7C7AA] px-4 text-lg text-black placeholder:text-black/60"
            />

            {data.employees &&
              Number(data.employees) < 1 && (
                <p className="text-red-700 mt-2">
                  Minimum 1 fő szükséges.
                </p>
              )}

            <button
              onClick={next}
              disabled={Number(data.employees) < 1}
              className="block mt-8 bg-black text-white px-8 py-3 rounded-xl font-bold disabled:opacity-40"
            >
              Következő →
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <button
              onClick={back}
              className="mb-8 font-semibold"
            >
              ← Vissza
            </button>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 max-w-3xl">
              Mennyit fizetnél havonta egy eszközért,
              ami helyetted figyeli a tendereket,
              hogy soha ne maradj le egy jó munkáról? *
            </h2>

            <div className="relative max-w-xl">
              <input
                autoFocus
                value={formatNumber(data.budget)}
                onChange={(e) =>
                  setData({
                    ...data,
                    budget: e.target.value.replace(
                      /\D/g,
                      ""
                    ),
                  })
                }
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    Number(data.budget) > 0
                  ) {
                    next();
                  }
                }}
                placeholder="10.000"
                className="w-full h-14 rounded-xl border border-[#B87C4B] bg-[#E7C7AA] px-4 pr-16 text-lg text-black placeholder:text-black/60"
              />

              <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold">
                Ft
              </span>
            </div>

            <button
              onClick={next}
              disabled={Number(data.budget) < 1}
              className="block mt-8 bg-black text-white px-8 py-3 rounded-xl font-bold disabled:opacity-40"
            >
              Következő →
            </button>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <button
              onClick={back}
              className="mb-8 font-semibold"
            >
              ← Vissza
            </button>

            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
              Email cím megadása *
            </h2>

            <input
              autoFocus
              type="email"
              value={data.email}
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  isValidEmail(data.email)
                ) {
                  next();
                }
              }}
              placeholder="pelda@email.hu"
              className="w-full max-w-xl h-14 rounded-xl border border-[#B87C4B] bg-[#E7C7AA] px-4 text-lg text-black placeholder:text-black/60"
            />

            {data.email &&
              !isValidEmail(data.email) && (
                <p className="text-red-700 mt-2">
                  Adj meg egy érvényes email címet.
                </p>
              )}

            {submitError && (
              <p className="text-red-700 mt-4 font-semibold">
                {submitError}
              </p>
            )}

            <button
              onClick={next}
              disabled={!isValidEmail(data.email) || isSubmitting}
              className="block mt-8 bg-black text-white px-8 py-3 rounded-xl font-bold disabled:opacity-40"
            >
              {isSubmitting ? "Mentés..." : "Kész →"}
            </button>
          </div>
        )}

        {/* THANK YOU */}
        {step === 5 && (
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Köszönjük, hogy kitöltötted a kérdőívet!
            </h2>

            <p className="text-2xl md:text-3xl font-bold mt-10 leading-relaxed">
              A TenderAI fejlesztés alatt áll.
              <br />
              Amikor elindul, elsőként értesítünk emailben.
            </p>

            <div className="mt-12 bg-[#E7C7AA] border border-[#B87C4B] rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4">
                Beküldött adatok
              </h3>

              <div className="space-y-2">
                <p>
                  <strong>Tevékenység:</strong>{" "}
                  {data.businessType}
                </p>

                <p>
                  <strong>Létszám:</strong>{" "}
                  {data.employees} fő
                </p>

                <p>
                  <strong>Havi keret:</strong>{" "}
                  {formatNumber(data.budget)} Ft
                </p>

                <p>
                  <strong>Email:</strong>{" "}
                  {data.email}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>


    </main>
  );
}
