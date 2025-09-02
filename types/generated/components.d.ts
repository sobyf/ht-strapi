import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalLink extends Struct.ComponentSchema {
  collectionName: 'components_global_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    lable: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface GlobalSocial extends Struct.ComponentSchema {
  collectionName: 'components_global_socials';
  info: {
    displayName: 'social';
    icon: 'twitter';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    lable: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCoreServices extends Struct.ComponentSchema {
  collectionName: 'components_home_core_services';
  info: {
    displayName: 'coreServices';
    icon: 'handHeart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
    service: Schema.Attribute.Component<'home.service', true>;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface HomeFaQs extends Struct.ComponentSchema {
  collectionName: 'components_home_fa_qs';
  info: {
    displayName: 'FAQs';
    icon: 'question';
  };
  attributes: {
    description: Schema.Attribute.Text;
    FAQ: Schema.Attribute.Component<'home.faq', true>;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    question: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface HomeHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_banners';
  info: {
    displayName: 'heroBanner';
    icon: 'house';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'global.link', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
    social: Schema.Attribute.Component<'global.social', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeLegal extends Struct.ComponentSchema {
  collectionName: 'components_home_legals';
  info: {
    displayName: 'legal';
    icon: 'shield';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeLegalAssurance extends Struct.ComponentSchema {
  collectionName: 'components_home_legal_assurances';
  info: {
    displayName: 'legalAssurance';
    icon: 'shield';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
    legal: Schema.Attribute.Component<'home.legal', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeLink extends Struct.ComponentSchema {
  collectionName: 'components_home_links';
  info: {
    displayName: 'link';
    icon: 'link';
  };
  attributes: {
    lable: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomePurchase extends Struct.ComponentSchema {
  collectionName: 'components_home_purchases';
  info: {
    displayName: 'purchase';
    icon: 'shoppingCart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    step: Schema.Attribute.String;
  };
}

export interface HomePurchaseProcess extends Struct.ComponentSchema {
  collectionName: 'components_home_purchase_processes';
  info: {
    displayName: 'purchaseProcess';
    icon: 'shoppingCart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'videos', true>;
    purchase: Schema.Attribute.Component<'home.purchase', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeService extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    displayName: 'service';
    icon: 'handHeart';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.link': GlobalLink;
      'global.social': GlobalSocial;
      'home.core-services': HomeCoreServices;
      'home.fa-qs': HomeFaQs;
      'home.faq': HomeFaq;
      'home.hero-banner': HomeHeroBanner;
      'home.legal': HomeLegal;
      'home.legal-assurance': HomeLegalAssurance;
      'home.link': HomeLink;
      'home.purchase': HomePurchase;
      'home.purchase-process': HomePurchaseProcess;
      'home.service': HomeService;
    }
  }
}
