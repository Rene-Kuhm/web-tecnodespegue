import { d as createAstro, e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, i as renderComponent, j as Fragment, g as addAttribute } from '../astro_COA5zy3C.mjs';
import 'kleur/colors';
import { $ as $$Button, b as $$WidgetWrapper, c as $$Headline, f as $$Features2, e as $$PageLayout } from './about_D60iZW5I.mjs';

const $$Astro$3 = createAstro("https://tecnodespegue.com");
const $$HeroText = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$HeroText;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction = await Astro2.slots.render("callToAction"),
    callToAction2 = await Astro2.slots.render("callToAction2")
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative md:-mt-[76px] not-prose"> <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6"> <div class="pt-0 md:pt-[76px] pointer-events-none"></div> <div class="py-12 md:py-20 pb-8 md:pb-8"> <div class="text-center max-w-5xl mx-auto"> ${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase">${unescapeHTML(tagline)}</p>`} ${title && renderTemplate`<h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">${unescapeHTML(title)}</h1>`} <div class="max-w-3xl mx-auto"> ${subtitle && renderTemplate`<p class="text-xl text-muted mb-6 dark:text-slate-300">${unescapeHTML(subtitle)}</p>`} <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4"> ${callToAction && renderTemplate`<div class="flex w-full sm:w-auto"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(callToAction)}` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { "variant": "primary", ...callToAction })}`} </div>`} ${callToAction2 && renderTemplate`<div class="flex w-full sm:w-auto"> ${typeof callToAction2 === "string" ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(callToAction2)}` })}` : renderTemplate`${renderComponent($$result, "Button", $$Button, { ...callToAction2 })}`} </div>`} </div> </div> ${content && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}`} </div> </div> </div> </section>`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/HeroText.astro", void 0);

const $$Astro$2 = createAstro("https://tecnodespegue.com");
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Form;
  const { inputs, textarea, disclaimer, button = "Contact us", description = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form> ${inputs && inputs.map(
    ({ type = "text", name, label = "", autocomplete = "on", placeholder = "" }) => name && renderTemplate`<div class="mb-6"> ${label && renderTemplate`<label${addAttribute(name, "for")} class="block text-sm font-medium"> ${label} </label>`} <input${addAttribute(type, "type")}${addAttribute(name, "name")}${addAttribute(name, "id")}${addAttribute(autocomplete, "autocomplete")}${addAttribute(placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div>`
  )} ${textarea && renderTemplate`<div> <label for="textarea" class="block text-sm font-medium"> ${textarea.label} </label> <textarea id="textarea" name="textarea"${addAttribute(textarea.rows ? textarea.rows : 4, "rows")}${addAttribute(textarea.placeholder, "placeholder")} class="py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"></textarea> </div>`} ${disclaimer && renderTemplate`<div class="mt-3 flex items-start"> <div class="flex mt-0.5"> <input id="disclaimer" name="disclaimer" type="checkbox" class="cursor-pointer mt-1 py-3 px-4 block w-full text-md rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900"> </div> <div class="ml-3"> <label for="disclaimer" class="cursor-pointer select-none text-sm text-gray-600 dark:text-gray-400"> ${disclaimer.label} </label> </div> </div>`} ${button && renderTemplate`<div class="mt-10 grid"> ${renderComponent($$result, "Button", $$Button, { "variant": "primary", "type": "submit" }, { "default": ($$result2) => renderTemplate`${button}` })} </div>`} ${description && renderTemplate`<div class="mt-3 text-center"> <p class="text-sm text-gray-600 dark:text-gray-400">${description}</p> </div>`} </form>`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/ui/Form.astro", void 0);

const $$Astro$1 = createAstro("https://tecnodespegue.com");
const $$Contact$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contact$1;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    inputs,
    textarea,
    disclaimer,
    button,
    description,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${inputs && renderTemplate`${maybeRenderHead()}<div class="flex flex-col max-w-xl mx-auto rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow p-4 sm:p-6 lg:p-8 w-full"> ${renderComponent($$result2, "FormContainer", $$Form, { "inputs": inputs, "textarea": textarea, "disclaimer": disclaimer, "button": button, "description": description })} </div>`}` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/components/widgets/Contact.astro", void 0);

const $$Astro = createAstro("https://tecnodespegue.com");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const metadata = {
    title: "Contact"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contact", "title": "\xA1Conect\xE9monos!" })} ${renderComponent($$result2, "ContactUs", $$Contact$1, { "title": "\xA1Env\xEDanos un mensaje hoy!", "subtitle": "Para obtener respuestas m\xE1s r\xE1pidas, explore nuestra secci\xF3n de preguntas frecuentes. \xA1Quiz\xE1s encuentres all\xED mismo la soluci\xF3n que est\xE1s buscando! Si no, nuestro equipo de soporte estar\xE1 encantado de ayudarle.", "inputs": [
    {
      type: "text",
      name: "name",
      label: "Name"
    },
    {
      type: "email",
      name: "email",
      label: "Email"
    }
  ], "textarea": {
    label: "Message"
  }, "disclaimer": {
    label: "Al enviar este formulario de contacto, usted reconoce y acepta la recopilaci\xF3n de su informaci\xF3n personal."
  }, "description": "Nuestro equipo de soporte normalmente responde dentro de las 24 horas h\xE1biles." })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xA1Estamos aqu\xED para ayudar!", "items": [
    {
      title: "Soporte General",
      description: `Chatea con nosotros para consultas relacionadas con la administraci\xF3n de cuentas, navegaci\xF3n del sitio web, problemas de pago, acceso a plantillas compradas o preguntas generales sobre la funcionalidad del sitio web.`
    },
    {
      title: "Contactar con ventas",
      description: "Chatea con nosotros si tienes preguntas sobre compras, opciones de personalizaci\xF3n, licencias para uso comercial, consultas sobre plantillas espec\xEDficas, etc."
    },
    {
      title: "Soporte T\xE9cnico",
      description: "Chatea con nosotros cuando tengas problemas como instalaci\xF3n de plantillas, problemas de edici\xF3n, problemas de compatibilidad con el software o errores de descarga, u otros desaf\xEDos t\xE9cnicos relacionados con el uso de las plantillas."
    },
    {
      title: "Tel\xE9fono",
      description: "+54 (2334) 423707",
      icon: "tabler:headset"
    },
    {
      title: "Email",
      description: "rdesigncastex@gmail.com",
      icon: "tabler:mail"
    },
    {
      title: "Ubicaci\xF3n",
      description: "Eduardo Castex (LP), La Pampa, Argentina",
      icon: "tabler:map-pin"
    }
  ] })} ` })}`;
}, "/Users/rkdev/Downloads/astrowind-main/src/pages/contact.astro", void 0);

const $$file = "/Users/rkdev/Downloads/astrowind-main/src/pages/contact.astro";
const $$url = "/contact";

const contact = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$HeroText as $, contact as c };
