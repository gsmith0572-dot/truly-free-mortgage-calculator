import AuthorBox from '@/components/blog/AuthorBox';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculadora de Amortización — Gratis, Sin Registro | Truly Free Mortgage',
  description: 'Genera tu tabla de amortización completa al instante. Ve cada pago desglosado en capital e interés con el saldo restante. Gratis para siempre, sin cuenta requerida.',
  alternates: { canonical: 'https://trulyfreemortgage.com/blog/calculadora-amortizacion' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      'headline': 'Calculadora de Amortización: Cómo Leer Tu Tabla de Pagos Hipotecarios',
      'description': 'Guía completa sobre la amortización hipotecaria: la fórmula matemática, por qué los primeros años son casi todo interés, cómo los pagos extra transforman tu préstamo, y cómo generar tu tabla gratis.',
      'datePublished': '2026-05-07',
      'dateModified': '2026-05-20',
      'author': { '@type': 'Person', 'name': 'George Smith', 'url': 'https://www.linkedin.com/in/george-smith-832113217/' },
      'publisher': { '@type': 'Organization', 'name': 'Truly Free Mortgage', 'url': 'https://trulyfreemortgage.com' },
      'mainEntityOfPage': 'https://trulyfreemortgage.com/blog/calculadora-amortizacion',
      'inLanguage': 'es',
    },
    {
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Qué es una tabla de amortización?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Una tabla de amortización es un registro completo de todos los pagos de un préstamo. Cada fila muestra el número de pago, el monto total pagado, la porción que va al capital, la porción que va a intereses y el saldo restante después del pago.' },
        },
        {
          '@type': 'Question',
          'name': '¿Por qué al principio casi todo mi pago es interés?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'El interés mensual se calcula sobre el saldo pendiente del préstamo. Al inicio el saldo es máximo, por lo que el cargo de interés es el más alto. Conforme pagas el capital, el saldo baja, el interés mensual disminuye y cada vez más de tu pago fijo ataca el capital. Este es el mecanismo de la amortización.' },
        },
        {
          '@type': 'Question',
          'name': '¿Cómo afectan los pagos extra a mi tabla de amortización?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Los pagos extra reducen el saldo del capital de forma inmediata. Dado que el interés futuro se calcula sobre ese saldo reducido, cada peso adicional que pagas ahorra un monto compuesto de interés futuro y acorta la fecha de liquidación del préstamo.' },
        },
        {
          '@type': 'Question',
          'name': '¿Puedo obtener mi tabla de amortización sin registrarme?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Sí. Truly Free Mortgage genera una tabla de amortización mes a mes completa sin ningún registro requerido. El cálculo corre en tu navegador y ningún dato sale de tu dispositivo.' },
        },
        {
          '@type': 'Question',
          'name': '¿Cuál es la diferencia entre una hipoteca a 15 y a 30 años?',
          'acceptedAnswer': { '@type': 'Answer', 'text': 'Una hipoteca a 15 años tiene pagos mensuales más altos pero pagas dramáticamente menos interés total. A 30 años los pagos son menores pero la amortización más lenta significa que pagas aproximadamente el doble de interés durante la vida del préstamo.' },
        },
      ],
    },
  ],
};

export default function CalculadoraAmortizacionPage() {
  const faqs = [
    {
      q: '¿Qué es una tabla de amortización?',
      a: 'Una tabla de amortización es un registro completo de todos los pagos de un préstamo. Cada fila muestra el número de pago, el monto total pagado, la porción que va al capital, la porción que va a intereses y el saldo restante después del pago.',
    },
    {
      q: '¿Por qué al principio casi todo mi pago es interés?',
      a: 'El interés mensual se calcula sobre el saldo pendiente del préstamo. Al inicio el saldo es máximo, por lo que el cargo de interés es el más alto. Conforme pagas el capital, el saldo baja, el interés mensual disminuye y cada vez más de tu pago fijo ataca el capital.',
    },
    {
      q: '¿Cómo afectan los pagos extra a mi tabla de amortización?',
      a: 'Los pagos extra reducen el saldo del capital de forma inmediata. Dado que el interés futuro se calcula sobre ese saldo reducido, cada peso adicional que pagas ahorra un monto compuesto de interés futuro y acorta la fecha de liquidación del préstamo.',
    },
    {
      q: '¿Puedo obtener mi tabla de amortización sin registrarme?',
      a: 'Sí. Truly Free Mortgage genera una tabla de amortización mes a mes completa sin ningún registro requerido. El cálculo corre en tu navegador y ningún dato sale de tu dispositivo.',
    },
    {
      q: '¿Cuál es la diferencia entre una hipoteca a 15 y a 30 años?',
      a: 'Una hipoteca a 15 años tiene pagos mensuales más altos pero pagas dramáticamente menos interés total. A 30 años los pagos son menores pero la amortización más lenta significa que pagas aproximadamente el doble de interés durante la vida del préstamo.',
    },
  ];

  const filas = [
    ['Concepto', 'Hipoteca 30 años al 6.5%', 'Hipoteca 15 años al 6.0%'],
    ['Monto del préstamo', '$400,000', '$400,000'],
    ['Pago mensual (capital + interés)', '$2,528', '$3,376'],
    ['Total pagado', '$910,080', '$607,680'],
    ['Total de interés', '$510,080', '$207,680'],
    ['Interés ahorrado', '—', '$302,400'],
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
          <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-blue-600 mb-3">Educación Hipotecaria</div>

          <h1 className="text-[32px] font-bold tracking-tight text-gray-900 mb-4 leading-tight">
            Calculadora de Amortización: Cómo Leer Tu Tabla de Pagos Hipotecarios
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid rgba(74,85,104,0.1)' }}>
            <img src="/george-smith.png" alt="George Smith" width={36} height={36} style={{ borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <span style={{ fontSize: '14px', fontWeight: 600, color: '#181c1e', letterSpacing: '-0.01em' }}>George Smith</span>
              <span style={{ fontSize: '13px', color: '#718096', letterSpacing: '-0.01em' }}> — Founder, Klickify Agency</span>
            </div>
          </div>

          <p className="text-[16px] text-gray-500 leading-relaxed mb-8">
            Tu pago mensual no cambia. Lo que hay adentro, sí. En los primeros años de tu hipoteca, la mayoría de cada pago va a intereses — no al capital que debes. Eso no es un truco; es matemática pura. Pero una vez que entiendes cómo funciona la amortización, también entiendes por qué los pagos extra al inicio importan tanto más que los del final. Aquí está cómo leer tu tabla, generarla gratis y usarla para tomar decisiones más inteligentes.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-gray-400 mb-3">Contenido</div>
            <ol className="space-y-2">
              {[
                ['#que-es', '¿Qué Es una Tabla de Amortización?'],
                ['#formula', 'La Fórmula Matemática Detrás de Cada Pago'],
                ['#interes-inicial', 'Por Qué Tu Préstamo Empieza Cargado de Interés'],
                ['#pagos-extra', 'Cómo los Pagos Extra Transforman Tu Tabla'],
                ['#15-vs-30', '15 Años vs. 30 Años: La Comparación Definitiva'],
                ['#genera', 'Genera Tu Tabla Gratis'],
                ['#faq', 'Preguntas Frecuentes'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-[14px] text-blue-600 font-medium hover:text-blue-800">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          <h2 id="que-es" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">¿Qué Es una Tabla de Amortización?</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Una tabla de amortización es el registro completo de todos los pagos que realizarás durante la vida de tu préstamo. Para cada período de pago — generalmente mensual — la tabla muestra cuatro datos: el número de pago, el monto total pagado, la porción aplicada al capital, la porción aplicada al interés y el saldo restante después del pago.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            La palabra amortización proviene del latín y significa extinguir gradualmente una deuda. Un préstamo completamente amortizado está diseñado para que el último pago programado reduzca tu saldo exactamente a cero. La mayoría de las hipotecas residenciales en Estados Unidos son préstamos de tasa fija completamente amortizados.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Esto significa que tu pago mensual permanece constante durante toda la vida del préstamo, pero la composición interna de ese pago — cuánto es capital versus interés — cambia cada mes sin excepción.
          </p>

          <h2 id="formula" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">La Fórmula Matemática Detrás de Cada Pago</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Tu pago mensual se calcula usando la fórmula estándar de anualidad. Dado un monto de préstamo P, una tasa de interés mensual r (tasa anual dividida entre 12) y un número total de pagos n, el pago mensual fijo M es:
          </p>
          <div className="bg-[#F3F4F6] rounded-lg p-4 mb-4 font-mono text-[13px] text-gray-800">
            M = P x [r(1 + r)^n] / [(1 + r)^n - 1]
          </div>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Una vez que tienes M, cada mes el cargo de interés es simplemente tu saldo actual multiplicado por la tasa mensual. El resto de M después de restar el interés va completamente al capital. Esa reducción de capital baja tu saldo, lo que reduce el cargo de interés del próximo mes, lo que significa que un poco más del próximo pago ataca el capital. Este efecto compuesto es el motor de la amortización.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            En un préstamo de $400,000 al 6.5% a 30 años, tu pago fijo es $2,528. En el mes uno, $2,167 van a interés y solo $361 van a capital. En el mes 360, solo $14 van a interés y $2,514 van a capital. El pago es idéntico todos los meses pero la composición cambia completamente.
          </p>

          <h2 id="interes-inicial" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Por Qué Tu Préstamo Empieza Cargado de Interés</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Este es el dato que más sorprende a los propietarios cuando ven su tabla de amortización por primera vez. Después de cinco años de pagos puntuales en una hipoteca a 30 años, has pagado aproximadamente el 16% del interés total que pagarás en toda la vida del préstamo — pero solo has reducido tu saldo de capital en un 8%. Llevas cinco años pagando y aún debes casi el 93% del monto original.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Esto no es un truco ni una característica predatoria. Es la consecuencia matemática de cobrar interés sobre el saldo pendiente. El prestamista te entregó $400,000 el primer día y tiene derecho a interés sobre cada dólar de ese saldo hasta que sea pagado. Como el saldo es máximo al inicio, también lo es el cargo de interés.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Lo que esto significa en la práctica: los primeros años de tu hipoteca son cuando los pagos extra hacen el mayor daño al costo total de interés. Cada dólar de capital que eliminas temprano elimina una cadena compuesta de cargos de interés futuros.
          </p>

          <h2 id="pagos-extra" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Cómo los Pagos Extra Transforman Tu Tabla</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Cuando realizas un pago superior a tu cuota mensual requerida, el exceso se aplica directamente al capital — siempre que así lo especifiques a tu prestamista por escrito. Esa reducción inmediata del capital se propaga por todos los pagos futuros.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            En ese mismo préstamo de $400,000 al 6.5% a 30 años, agregar solo $200 por mes recorta el préstamo a aproximadamente 24 años y ahorra cerca de $84,000 en interés total. Agregar $500 por mes lo reduce a unos 20 años y ahorra más de $140,000. El ahorro es compuesto porque cada dólar de capital eliminado previene todo el interés futuro que se habría acumulado sobre él.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            La clave operativa: siempre indica por escrito que el pago extra debe aplicarse a capital únicamente. Sin instrucciones claras, muchos administradores de préstamos aplican el exceso a pagos futuros programados en lugar del capital actual, eliminando completamente el beneficio.
          </p>

          <h2 id="15-vs-30" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">15 Años vs. 30 Años: La Comparación Definitiva</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            La diferencia entre una tabla de amortización a 15 y a 30 años es una de las decisiones financieras más importantes que toma un comprador de vivienda.
          </p>

          <div className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] overflow-hidden mb-6">
            <table className="w-full text-[13px]" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <thead>
                <tr className="bg-[#F8F9FA]">
                  {filas[0].map((h, i) => (
                    <th key={h} className={"px-5 py-3 text-[10px] font-semibold tracking-[0.06em] uppercase text-gray-400 " + (i === 0 ? 'text-left' : 'text-right')}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filas.slice(1).map((row, i) => (
                  <tr key={row[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F8F9FA]'}>
                    <td className="px-5 py-3 font-medium text-gray-800">{row[0]}</td>
                    <td className="px-5 py-3 text-right text-gray-500">{row[1]}</td>
                    <td className="px-5 py-3 text-right font-semibold text-green-600">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            El prestatario a 15 años paga $848 más al mes pero ahorra más de $300,000 en interés. La pregunta no es si el plazo a 15 años es matemáticamente superior — claramente lo es. La pregunta es si el pago mensual más alto es sostenible dado tu ingreso, gastos y reservas de emergencia.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            Una estrategia intermedia que muchos asesores financieros recomiendan: toma el préstamo a 30 años por la flexibilidad de pago, pero realiza pagos extra de capital consistentemente como si tuvieras el plazo de 15 años. Si el flujo de efectivo se ajusta, siempre puedes volver al pago requerido a 30 años. El préstamo a 15 años no te da esa flexibilidad.
          </p>

          <h2 id="genera" className="text-[22px] font-bold tracking-tight text-gray-900 mb-3 mt-10">Genera Tu Tabla Gratis</h2>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            La mayoría de las calculadoras de amortización en internet son formularios de captación de leads diseñados para obtener tu información de contacto y venderla a prestamistas. Ingresas tus datos del préstamo y a cambio de la tabla aceptas ser contactado por brokers hipotecarios.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-4">
            Truly Free Mortgage funciona diferente. Ingresa los parámetros de tu préstamo y la tabla de amortización completa se genera instantáneamente en tu navegador. Cada fila de cada mes, desde el pago uno hasta el pago final. Exporta en formato CSV para tus registros. Sin correo electrónico, sin número de teléfono, sin crear cuenta.
          </p>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
            El motor de cálculo corre completamente en el lado del cliente. Tus datos financieros nunca llegan a un servidor. No hay backend que los reciba. Gratis para siempre, no gratis por 14 días.
          </p>

          <div className="bg-white rounded-lg p-6 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)] mb-10">
            <a href="/mortgage-calculator" className="block w-full text-center text-white font-bold text-[15px] py-3.5 rounded-lg hover:opacity-90 transition-opacity" style={{ background: 'linear-gradient(135deg,#0058c3,#0070f3)' }}>
              Generar Mi Tabla de Amortización Gratis
            </a>
            <p className="text-center text-[12px] text-gray-400 mt-3">Sin cuenta. Sin correo. Corre en tu navegador.</p>
          </div>

          <h2 id="faq" className="text-[22px] font-bold tracking-tight text-gray-900 mb-6 mt-10">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-lg p-5 shadow-[0_4px_6px_-1px_rgb(0_0_0/0.1)]">
                <div className="text-[14px] font-semibold text-gray-900 mb-2">{q}</div>
                <div className="text-[14px] text-gray-500 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8">
            <p className="text-xs text-gray-400 leading-relaxed">
              La información en esta página es de carácter educativo. Las cifras ilustrativas varían según las condiciones reales del préstamo. Truly Free Mortgage Calculator no recopila datos personales y no conecta usuarios con prestamistas.
            </p>
          </div>

          <div className="mt-12 pt-8">
            <h2 className="text-[18px] font-bold text-gray-900 mb-4">Guías Relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['/blog/calculadora-hipoteca-fha', 'Calculadora de Hipoteca FHA', 'Seguro MIP, pago inicial por puntaje, FHA vs convencional en español.'],
                ['/blog/amortization-schedule-generator', 'Amortization Schedule Generator', 'Tabla de amortización completa en inglés con exportación CSV.'],
                ['/blog/15-year-vs-30-year-mortgage', '15-Year vs 30-Year Mortgage', '$237,000 de diferencia en interés total en un préstamo de $300k.'],
                ['/blog/mortgage-payoff-calculator', 'Mortgage Payoff Calculator', 'Cómo los pagos extra eliminan años de tu préstamo.'],
              ].map(([href, title, desc]) => (
                <a key={String(href)} href={String(href)} className="block bg-white rounded-lg p-4 shadow-[0_2px_4px_-1px_rgb(0_0_0/0.06)] hover:shadow-[0_4px_8px_-2px_rgb(0_0_0/0.1)] transition-shadow">
                  <p className="text-[13px] font-semibold text-blue-600 mb-1">{title}</p>
                  <p className="text-[12px] text-gray-500 leading-relaxed">{desc}</p>
                </a>
              ))}
            </div>
          </div>

          <AuthorBox />
        </div>
      </div>
    </>
  );
}