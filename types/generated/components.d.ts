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

export interface PostTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_post_text_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    body: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    level: Schema.Attribute.Enumeration<['h2', 'h3', 'h4']>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.link': GlobalLink;
      'global.social': GlobalSocial;
      'post.text-block': PostTextBlock;
    }
  }
}
