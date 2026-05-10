import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Hipoteca FHA — Gratis, Sin Registro | Truly Free Mortgage',
  description: 'Calcula tu pago mensual FHA al instante. Seguro hipotecario MIP, pago inicial por puntaje de crédito, tabla de amortización completa. Gratis para siempre.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/calculadora-hipoteca-fha' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Calculadora de Hipoteca FHA: Cómo Calcular Tu Pago Incluyendo el Seguro MIP',
      'description': 'Guía completa sobre los préstamos FHA: requisitos de pago inicial, seguro hipotecario MIP, límites de préstamo 2026 y cómo calcular tu pago mensual exacto.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-07',
      'author': { '@type': 'Organization', 'name': 'Truly Free Mortgage' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/calculadora-hipoteca-fha',
      'inLanguage': 'es',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuánto es el pago inicial para un préstamo FHA?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El pago inicial mínimo para un préstamo FHA es del 3.5% del precio de compra si tu puntaje de crédito es 580 o mayor. Si tu puntaje está entre 500 y 579, el pago inicial requerido es del 10%. No se aprueban préstamos FHA con puntajes por debajo de 500.' },
        },
        {
          '@type': 'Question',
          'name': '¿Qué es el MIP en un préstamo FHA?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El MIP o Mortgage Insurance Premium es el seguro hipotecario que cobra la FHA. Tiene dos componentes: un cargo inicial (UFMIP) del 1.75% del monto del préstamo que se puede financiar, y un cargo anual del 0.55% dividido en pagos mensuales. A diferencia del PMI convencional, el MIP anual dura toda la vida del préstamo si el pago inicial fue menor al 10%.' },
        },
        {
          '@type': 'Question',
          'name': '¿Cuál es el límite de préstamo FHA en 2026?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'En 2026 el límite FHA para áreas de costo estándar es $524,225 para una vivienda unifamiliar. En áreas de alto costo el límite llega hasta $1,209,750. Los límites varían por condado y se actualizan anualmente.' },
        },
        {
          '@type': 'Question',
          'name': '¿Se puede eliminar el seguro MIP de un préstamo FHA?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Si tu pago inicial fue del 10% o más, el MIP anual se cancela automáticamente después de 11 años. Si tu pago inicial fue menor al 10%, el MIP dura toda la vida del préstamo. La única forma de eliminarlo en ese caso es refinanciar a un préstamo convencional una vez que tengas al menos 20% de patrimonio en la vivienda.' },
        },
        {
          '@type': 'Question',
          'name': '¿Los préstamos FHA son solo para compradores por primera vez?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'No. Los préstamos FHA están disponibles para cualquier comprador que cumpla los requisitos, no solo para quienes compran por primera vez. Sin embargo, solo puedes tener un préstamo FHA activo a la vez y la propiedad debe ser tu residencia principal.' },
        },
      ],
    },
  ],
};

export default function CalculadoraHipotecaFHAPage() {
  const faqs = [
    {
      q: '¿Cuánto es el pago inicial para un préstamo FHA?',
      a: 'El pago inicial mínimo para un préstamo FHA es del 3.5% del precio de compra si tu puntaje de crédito es 580 o mayor. Si tu puntaje está entre 500 y 579, el pago inicial requerido es del 10%. No se aprueban préstamos FHA con puntajes por debajo de 500.',
    },
    {
      q: '¿Qué es el MIP en un préstamo FHA?',
      a: 'El MIP o Mortgage Insurance Premium es el seguro hipotecario que cobra la FHA. Tiene dos componentes: un cargo inicial del 1.75% del monto del préstamo que se puede financiar, y un cargo anual del 0.55% dividido en pagos mensuales. A diferencia del PMI convencional, el MIP anual dura toda la vida del préstamo si el pago inicial fue menor al 10%.',
    },
    {
      q: '¿Cuál es el límite de préstamo FHA en 2026?',
      a: 'En 2026 el límite FHA para áreas de costo estándar es $524,225 para una vivienda unifamiliar. En áreas de alto costo el límite llega hasta $1,209,750. Los límites varían por condado y se actualizan anualmente.',
    },
    {
      q: '¿Se puede eliminar el seguro MIP de un préstamo FHA?',
      a: 'Si tu pago inicial fue del 10% o más, el MIP anual se cancela automáticamente después de 11 años. Si tu pago inicial fue menor al 10%, el MIP dura toda la vida del préstamo. La única forma de eliminarlo en ese caso es refinanciar a un préstamo convencional una vez que tengas al menos 20% de patrimonio.',
    },
    {
      q: '¿Los préstamos FHA son solo para compradores por primera vez?',
      a: 'No. Los préstamos FHA están disponibles para cualquier comprador que cumpla los requisitos. Sin embargo, solo puedes tener un préstamo FHA activo a la vez y la propiedad debe ser tu residencia principal.',
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-[#F8F9FA]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        <nav className="bg-white px-6 h-16 flex items-center shadow-[0_1px_3px_rgb(0_0_0/0.06)]">
          <a href="/mortgage-calculator" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              <svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M9 2L2 7v9h5v-5h4v5h5V7L9 2z" fill="white"/></svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-900">Truly <span className="text-blue-600">Free</span> Mortgage</span>
          </a>
          <div className="ml-auto flex gap-6">
            <a href="/mortgage-calculator" className="text-sm text-gray-500 hover:text-gray-800">Calculadora</a>
            <a href="/blog" className="text-sm text-blue-600 font-medium">Blog</a>
          </div>
        </nav>

        <div className="max-w-[760px] mx-auto px-6 py-12">
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Préstamos FHA</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Calculadora de Hipoteca FHA: Cómo Calcular Tu Pago Incluyendo el Seguro MIP
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
            Los préstamos FHA permiten comprar una vivienda con tan solo 3.5% de pago inicial y puntajes de crédito desde 580. Pero el costo real incluye el seguro hipotecario MIP, que muchos compradores no calculan correctamente. Aquí está todo lo que necesitas saber para calcular tu pago mensual exacto.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">Contenido</div>
            <ol className="space-y-2">
              {[
                ['#que-es', '¿Qué es un Préstamo FHA?'],
                ['#requisitos', 'Requisitos de Elegibilidad'],
                ['#mip', 'El Seguro MIP Explicado'],
                ['#calcular', 'Cómo Calcular Tu Pago Mensual'],
                ['#fha-vs-convencional', 'FHA vs. Convencional: Comparación Real'],
                ['#calculadora', 'Calcula Tu Pago Gratis'],
                ['#faq', 'Preguntas Frecuentes'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-blue-600 font-medium hover:text-blue-800">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          <h2 id="que-es" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">¿Qué es un Préstamo FHA?</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Un préstamo FHA es una hipoteca asegurada por la Administración Federal de Vivienda, una agencia del gobierno federal de los Estados Unidos. La FHA no presta dinero directamente — asegura el préstamo, lo que permite a los prestamistas privados ofrecer condiciones más flexibles a compradores con puntajes de crédito más bajos o menor capital para el pago inicial.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            El programa existe desde 1934 y fue creado para ampliar el acceso a la propiedad de vivienda. En la actualidad representa aproximadamente el 15% de todas las hipotecas originadas en Estados Unidos, con una concentración mayor entre compradores de primera vivienda y compradores de ingresos bajos a moderados.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            La flexibilidad del programa tiene un costo: el seguro hipotecario MIP, que protege al prestamista en caso de incumplimiento y es pagado íntegramente por el prestatario. Entender este costo es esencial para comparar el préstamo FHA con alternativas convencionales.
          </p>

          <h2 id="requisitos" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Requisitos de Elegibilidad</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Los requisitos para un préstamo FHA son significativamente más flexibles que los convencionales. El puntaje de crédito mínimo es 580 para calificar con 3.5% de pago inicial. Puntajes entre 500 y 579 requieren 10% de pago inicial. Puntajes por debajo de 500 no califican bajo ninguna circunstancia.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            La relación deuda-ingreso máxima es generalmente del 43%, aunque algunos prestamistas aprueban hasta el 50% con factores compensatorios como reservas de efectivo o historial de empleo estable. El préstamo debe ser para la residencia principal del prestatario — no se permiten propiedades de inversión ni casas vacacionales.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Los límites de préstamo en 2026 son $524,225 para áreas de costo estándar y hasta $1,209,750 en condados de alto costo como partes de California, Nueva York y Hawaii. La propiedad debe ser inspeccionada y cumplir con los estándares mínimos de la FHA en cuanto a condición y seguridad.
          </p>

          <h2 id="mip" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">El Seguro MIP Explicado</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            El MIP tiene dos componentes que debes calcular por separado. El MIP inicial, conocido como UFMIP, es el 1.75% del monto del préstamo y se cobra al momento del cierre. En la mayoría de los casos se financia directamente en el préstamo, lo que significa que no necesitas pagarlo de tu bolsillo pero aumenta tu balance.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            El MIP anual es actualmente el 0.55% del balance del préstamo para la mayoría de los préstamos FHA a 30 años con menos del 10% de pago inicial. Este cargo se divide entre 12 y se añade a cada pago mensual. En un préstamo de $350,000 el MIP anual inicial es $1,925, o $160 por mes.
          </p>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {['Componente MIP', 'Tasa', 'En préstamo $350,000', 'Duración'].map((h, i) => (
                    <th key={h} className={"px-4 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['UFMIP (Inicial)', '1.75%', '$6,125', 'Una vez al cierre'],
                  ['MIP Anual (mensual)', '0.55%', '$160/mes', 'Vida del préstamo'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{row[1]}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{row[2]}</td>
                    <td className="px-4 py-3 text-right font-medium text-gray-600">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            A diferencia del PMI en préstamos convencionales, el MIP anual de FHA no se cancela automáticamente cuando alcanzas el 20% de patrimonio si tu pago inicial fue menor al 10%. Para eliminarlo deberás refinanciar a un préstamo convencional, lo que implica nuevos costos de cierre y calificar nuevamente con el prestamista.
          </p>

          <h2 id="calcular" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Cómo Calcular Tu Pago Mensual</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            El pago mensual FHA tiene cuatro componentes: principal e interés, MIP anual dividido entre 12, impuesto predial mensual, y seguro de propietario mensual.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Ejemplo práctico: Compras una vivienda a $380,000. Pago inicial del 3.5% equivale a $13,300. El UFMIP del 1.75% sobre $366,700 es $6,417, financiado en el préstamo. Balance total del préstamo: $373,117. A una tasa del 6.75% a 30 años, el pago de principal e interés es $2,420. MIP mensual: $171. Impuestos estimados: $350. Seguro: $100. Pago mensual total: $3,041.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Comparado con el precio de lista del 3.5% de pago inicial, el costo real incluye ese MIP mensual de $171 que muchos compradores no anticipan. Durante los primeros años del préstamo, el MIP representa aproximadamente el 6% del pago total mensual.
          </p>

          <h2 id="fha-vs-convencional" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">FHA vs. Convencional: Comparación Real</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Para un comprador con puntaje de crédito de 720 y 5% de pago inicial, la comparación entre FHA y convencional muestra resultados sorprendentes.
          </p>

          <div className="bg-white rounded-xl shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {['Concepto', 'FHA (3.5% down)', 'Convencional (5% down)'].map((h, i) => (
                    <th key={h} className={"px-4 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Pago inicial', '$13,300', '$19,000'],
                  ['Tasa de interés', '6.75%', '6.875%'],
                  ['Seguro mensual', '$171 (MIP)', '$158 (PMI)'],
                  ['¿Se cancela el seguro?', 'No (vida del préstamo)', 'Sí (al 20% de patrimonio)'],
                  ['Pago mensual total', '$3,041', '$3,028'],
                ].map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="px-4 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className="px-4 py-3 text-right text-gray-500">{row[1]}</td>
                    <td className="px-4 py-3 text-right font-semibold text-green-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Para un comprador con puntaje 720, el préstamo convencional es generalmente superior a largo plazo porque el PMI se puede eliminar. El FHA tiene sentido cuando el puntaje de crédito es menor a 620, cuando el comprador no puede reunir el 5% convencional, o cuando necesita la flexibilidad de los criterios de calificación FHA.
          </p>

          <h2 id="calculadora" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Calcula Tu Pago Gratis</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            La mayoría de las calculadoras de hipoteca FHA en internet requieren tu correo electrónico y te conectan con prestamistas que te llaman para vender sus productos. Truly Free Mortgage calcula tu pago completo — incluyendo MIP, impuestos y seguro — sin registro, sin correo electrónico y sin contacto con prestamistas.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Todos los cálculos se ejecutan en tu navegador. Tus datos financieros nunca llegan a ningún servidor. Gratis para siempre.
          </p>

          <div className="bg-white rounded-xl p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Calcular Mi Pago FHA Gratis
            </a>
            <p className="text-center text-[12px] text-gray-400 mt-3">Sin cuenta. Sin correo. Corre en tu navegador.</p>
          </div>

          <h2 id="faq" className="text-[22px] font-bold tracking-tight text-gray-900 mb-6 mt-10">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)]">
                <div className="text-[14px] font-semibold text-gray-900 mb-2">{q}</div>
                <div className="text-[14px] text-gray-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-xs text-gray-400 leading-relaxed">
              La información en esta página es de carácter educativo. Las tasas MIP, límites de préstamo y requisitos FHA son establecidos por HUD y pueden cambiar. Consulta con un prestamista aprobado por la FHA para cifras específicas a tu situación. Truly Free Mortgage Calculator no recopila datos personales y no conecta usuarios con prestamistas.
            </p>
          </div>
        </div>
      
          <AuthorBox />
        </div>
    </>
  );
}