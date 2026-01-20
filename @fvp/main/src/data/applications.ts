import { env } from "../runtime/runtime-env";

interface Domain {
  name: string;
  description?: string;
  applications: Application[];
}

interface Application {
  name: string;
  description: string;
  urls: {
    app: string;
    docs: string;
    website: string;
    logo: string;
  };
}

export const domainsWithApps: Domain[] = [{
  name: 'Household Finances',
  description: 'Applications to manage and optimize your household finances.',
  applications: [{
    name: 'Firefly III Core',
    description: 'A free and open source personal finance manager',
    urls: {
      app: `https://localhost:${env.FINANCE_FIREFLYCORE_PORT}`,
      docs: 'https://docs.firefly-iii.org/?mtm_campaign=firefly-iii-org&mtm_kwd=top-link',
      website: 'https://www.firefly-iii.org/',
      logo: 'https://demo.firefly-iii.org/images/logo-session.png'
    }
  }, {
    name: 'Firefly III Data Importer',
    description: 'A free and open source personal finance manager',
    urls: {
      app: `https://localhost:${env.FINANCE_FIREFLYIMPORT_PORT}`,
      docs: 'https://docs.firefly-iii.org/?mtm_campaign=firefly-iii-org&mtm_kwd=top-link',
      website: 'https://www.firefly-iii.org/',
      logo: 'https://demo.firefly-iii.org/images/logo-session.png'
    }
  }]
}, {
  name: 'Family life center in one place',
  description: 'Applications to manage and organize your family life in one place.',
  applications: [{
    name: 'HomeHub',
    description: 'Ever wanted a simple, private spot on your home network for your family\'s daily stuff? That\'s HomeHub. It\'s a lightweight, self-hosted web app that turns any computer (even a Raspberry Pi!) into a central hub for shared notes, shopping lists, chores, a media downloader, and even a family expense tracker.',
    urls: {
      app: `https://localhost:${env.DASHBOARD_HOMEHUB_PORT}`,
      docs: 'https://github.com/surajverma/homehub',
      website: 'https://github.com/surajverma/homehub',
      logo: ''
    }
  }]
}, {
  name: 'Documents and Digital Archive',
  description: 'Applications to manage and organize your documents and digital archive.',
  applications: [{
    name: 'Stirling PDF',
    description: 'Stirling helps you read, edit, or create any PDF you can imagine with AI.',
    urls: {
      app: `https://localhost:${env.DIGITAL_STIRLINGPDF_PORT}`,
      docs: 'https://docs.stirlingpdf.com/',
      website: 'https://www.stirling.com/',
      logo: 'https://raw.githubusercontent.com/Stirling-Tools/Stirling-PDF/main/docs/stirling.png'
    }
  }, {
    name: 'Paperless',
    description: 'Paperless-ngx is a community-supported open-source document management system that transforms your physical documents into a searchable online archive so you can keep, well, less paper.',
    urls: {
      app: `https://localhost:${env.DIGITAL_PAPERLESS_PORT}`,
      docs: 'https://docs.paperless-ngx.com/',
      website: 'https://docs.paperless-ngx.com/',
      logo: 'https://docs.paperless-ngx.com/assets/logo_full_black.svg#only-light'
    }
  }]
}, {
  name: 'Tasks, Projects and Personal Organization',
  description: 'Applications to help you manage your tasks, projects, and personal organization.',
  applications: [{
    name: 'Vikunja',
    description: 'The to-do app to organize your life.',
    urls: {
      app: `https://localhost:${env.ORGANIZATION_VIKUNJA_PORT}`,
      docs: 'https://vikunja.io/docs/',
      website: 'https://vikunja.io/',
      logo: 'https://avatars.githubusercontent.com/u/41270016?s=200&v=4'
    }
  }]
}, {
  name: 'Home Inventory and Management',
  description: 'Applications to help you manage your home inventory and organization.',
  applications: [{
    name: 'Homebox',
    description: 'Homebox is the inventory and organization system built for the Home User! With a focus on simplicity and ease of use, Homebox is the perfect solution for your home inventory, organization, and management needs.',
    urls: {
      app: `https://localhost:${env.INVENTORY_HOMEBOX_PORT}`,
      docs: 'https://hay-kot.github.io/homebox/',
      website: 'https://hay-kot.github.io/homebox/',
      logo: 'https://homebox.software/lilbox.svg'
    }
  }]
}, {
  name: 'Food and Cooking',
  description: 'Applications to help you manage your recipes, meal planning, and groceries.',
  applications: [{
    name: 'Grocy',
    description: 'Grocy is a web-based self-hosted groceries & household management solution for your home.',
    urls: {
      app: `https://localhost:${env.FOOD_GROCY_PORT}`,
      docs: 'https://grocy.info/links',
      website: 'https://grocy.info/',
      logo: 'https://grocy.info/img/grocy_logo.svg?v=1da9fe9'
    }
  }, {
    name: 'Mealie',
    description: 'Mealie is an intuitive and easy to use recipe management app. It\'s designed to make your life easier by being the best recipes management experience on the web and providing you with an easy to use interface to manage your growing collection of recipes.',
    urls: {
      app: `https://localhost:${env.FOOD_MEALIE_PORT}`,
      docs: 'https://docs.mealie.io/',
      website: 'https://mealie.io/',
      logo: 'https://avatars.githubusercontent.com/u/92342333?s=48&v=4'
    }
  }]
}, {
  name: 'Security and Password Management',
  description: 'Applications to help you manage your passwords and enhance your security.',
  applications: [{
    name: 'Vaultwarden',
    description: 'An alternative server implementation of the Bitwarden Client API, written in Rust and compatible with official Bitwarden clients [disclaimer], perfect for self-hosted deployment where running the official resource-heavy service might not be ideal.',
    urls: {
      app: `https://localhost:${env.SECURITY_VAULTWARDEN_PORT}`,
      docs: 'https://github.com/dani-garcia/vaultwarden',
      website: 'https://github.com/dani-garcia/vaultwarden',
      logo: 'https://raw.githubusercontent.com/dani-garcia/vaultwarden/0c6817cb4e24964deaf765fd676da6c49e47d099/resources/vaultwarden-logo-auto.svg'
    }
  }]
}, {
  name: 'Internal Tools',
  description: 'Applications to help you manage internal tools.',
  applications: [{
    name:'PgAdmin 4',
    description: 'Feature-rich, open-source administration and development platform for PostgreSQL, the most advanced open source database in the world.',
    urls: {
      app: `http://localhost:${env.TOOL_PGADMIN4_PORT}`,
      docs: 'https://www.pgadmin.org/docs/pgadmin4/latest/',
      website: 'https://www.pgadmin.org/',
      logo: 'https://www.pgadmin.org/static/COMPILED/assets/img/postgres-alt.svg'
    }
  }, {
    name: 'Redis Commander',
    description: 'Redis-Commander is a node.js web application used to view, edit, and manage a Redis Database',
    urls: {
      app: `http://localhost:${env.TOOL_REDISCOMMANDER_PORT}`,
      docs: 'https://joeferner.github.io/redis-commander/',
      website: 'https://joeferner.github.io/redis-commander/',
      logo: 'https://joeferner.github.io/redis-commander/images/banner.png'
    }
  }]
}];