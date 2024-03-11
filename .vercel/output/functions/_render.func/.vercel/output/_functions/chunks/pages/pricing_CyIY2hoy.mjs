import { d as createAstro, e as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, g as addAttribute, j as Fragment, u as unescapeHTML } from '../astro_COA5zy3C.mjs';
import 'kleur/colors';
import { b as $$WidgetWrapper, c as $$Headline, i as $$Icon, $ as $$Button, l as $$Features3, e as $$PageLayout } from './about_D60iZW5I.mjs';
import { $ as $$HeroText } from './contact_CntGirqH.mjs';
import { b as $$Steps, a as $$FAQs } from './index_yslIQ5qJ.mjs';
import { $ as $$CallToAction } from './click-through_EZsb2u_-.mjs';

const $$Astro$1 = createAstro("https://tecnodespegue.com");
const $$Pricing$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing$1;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-5xl">$</span> <span class="text-6xl font-extrabold">${price}</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && renderTemplate`<ul role="list" class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/Pricing.astro", void 0);

const $$Astro = createAstro("https://tecnodespegue.com");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pricing;
  const metadata = {
    title: "Precios"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Precios", "title": "Precios insuperables", "subtitle": "Elige el plan perfecto que se alinee con tus objetivos." })}  ${renderComponent($$result2, "Prices", $$Pricing$1, { "title": "Nuestros precios", "subtitle": "Solo paga por lo que necesites", "prices": [
    {
      title: "basic",
      subtitle: "Elecci\xF3n \xF3ptima para uso personal.",
      price: 29,
      period: "por mes",
      items: [
        {
          description: "Etiam in libero, et volutpat"
        },
        {
          description: "Aenean ac nunc dolor tristique"
        },
        {
          description: "Cras scelerisque accumsan lib"
        },
        {
          description: "In hac habitasse"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Empezar",
        href: "#"
      }
    },
    {
      title: "Est\xE1ndar",
      subtitle: "Opci\xF3n \xF3ptima para equipos peque\xF1os",
      price: 69,
      period: "Por mes",
      items: [
        {
          description: "Proin vel laoreet"
        },
        {
          description: "Ut efficitur habitasse egestas"
        },
        {
          description: "Volutpat hac curabitur"
        },
        {
          description: "Pellentesque blandit ut nibh"
        },
        {
          description: "Donec fringilla sem"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Empezar",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "popular"
    },
    {
      title: "premium",
      subtitle: "Opci\xF3n \xF3ptima para empresas.",
      price: 199,
      period: "Por mes",
      items: [
        {
          description: "Curabitur suscipit risus"
        },
        {
          description: "Aliquam habitasse malesuada"
        },
        {
          description: "Suspendisse sit amet blandit"
        },
        {
          description: "Suspendisse auctor blandit dui"
        }
      ],
      callToAction: {
        target: "_blank",
        text: "Empezar",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "Features3", $$Features3, { "title": "Funciones relacionadas con el precio", "subtitle": "Descubre las ventajas de elegir nuestros planes", "columns": 2, "items": [
    {
      title: "Planes de precios escalonados",
      description: "Elija entre una variedad de planes de precios dise\xF1ados para adaptarse a diferentes presupuestos y requisitos.",
      icon: "tabler:stairs"
    },
    {
      title: "Precios transparentes",
      description: "Detalles de precios claramente mostrados para cada plan, sin costos ocultos ni cargos inesperados.",
      icon: "tabler:flip-vertical"
    },
    {
      title: "M\xE9todos de pago seguros",
      description: "Pasarelas de pago seguras para proteger su informaci\xF3n financiera durante las transacciones.",
      icon: "tabler:shield-lock"
    },
    {
      title: "Acceso instant\xE1neo",
      description: `Acceso inmediato a las funciones y plantillas de su plan elegido al momento de la suscripci\xF3n.`,
      icon: "tabler:accessible"
    },
    {
      title: "Valor de actualizaci\xF3n",
      description: "Actualice a planes de nivel superior para desbloquear m\xE1s funciones y beneficios para una experiencia mejorada.",
      icon: "tabler:chevrons-up"
    },
    {
      title: "24H soporte",
      description: "Preguntas respondidas a trav\xE9s de chat en vivo, correo electr\xF3nico o tel\xE9fono, todos los d\xEDas calendario.",
      icon: "tabler:headset"
    }
  ], "classes": { container: "max-w-5xl" } })}  ${renderComponent($$result2, "Steps", $$Steps, { "title": "Un viaje guiado desde los planes a la creatividad", "tagline": "proceso simplificado", "isReversed": true, "items": [
    {
      title: "Explorar planes",
      icon: "tabler:number-1"
    },
    {
      title: "Selecciona un plan",
      icon: "tabler:number-2"
    },
    {
      title: "Registrate e inicia secion",
      icon: "tabler:number-3"
    },
    {
      title: "Revisar orden",
      icon: "tabler:number-4"
    },
    {
      title: "Ingrese los detalles de pago",
      icon: "tabler:number-5"
    },
    {
      title: "Confirmaci\xF3n",
      icon: "tabler:number-6"
    },
    {
      title: "Descargue y comience a usar la(s) plantilla(s)",
      icon: "tabler:number-7"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    alt: "Steps image"
  } })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Preguntas frecuentes sobre precios", "subtitle": "Elegir el plan correcto es importante y estamos aqu\xED para responder sus preguntas. Si tiene consultas sobre nuestras opciones de precios, est\xE1 en el lugar correcto.", "columns": 1, "items": [
    {
      title: "\xBFLos planes vienen con atenci\xF3n al cliente?",
      description: "Por supuesto, todos los planes incluyen acceso a nuestro exclusivo servicio de atenci\xF3n al cliente para ayudarle con cualquier consulta o inquietud."
    },
    {
      title: "\xBFExiste un per\xEDodo de prueba para los diferentes planes?",
      description: "Lamentablemente, no ofrecemos per\xEDodos de prueba para los planes. Sin embargo, puede consultar nuestra secci\xF3n de demostraci\xF3n para obtener una vista previa de la calidad de nuestras plantillas."
    },
    {
      title: "\xBFPuedo cambiar entre planes?",
      description: "\xA1Ciertamente! Puede actualizar o degradar f\xE1cilmente su plan, en cualquier momento, para encontrar el que mejor se adapte a sus necesidades cambiantes."
    },
    {
      title: "\xBFQu\xE9 m\xE9todos de pago aceptan?",
      description: "Aceptamos las principales tarjetas de cr\xE9dito y m\xE9todos de pago en l\xEDnea para garantizar un proceso de transacci\xF3n conveniente y seguro."
    },
    {
      title: "\xBFHay cargos ocultos m\xE1s all\xE1 del costo mostrado?",
      description: "No, el costo de la suscripci\xF3n cubre todas las funciones y plantillas enumeradas en cada plan. No hay tarifas ocultas ni cargos adicionales."
    }
  ] })}  ${renderComponent($$result2, "CallToAction", $$CallToAction, { "title": "\xBFListo/a para impulsar tus proyectos?", "subtitle": "\xDAnase a nuestra comunidad de clientes satisfechos que han transformado su trabajo con nuestras plantillas.", "actions": [
    {
      variant: "primary",
      text: "Empieza ahora",
      href: "/"
    }
  ] })} ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/pages/pricing.astro", void 0);

const $$file = "/Users/rkdev/Downloads/astrowind-main/src/pages/pricing.astro";
const $$url = "/pricing";

const pricing = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Pricing,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Pricing$1 as $, pricing as p };
