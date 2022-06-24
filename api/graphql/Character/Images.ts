// card                        String?
// constellation               String?
// constellation_1             String? @map("constellation-1")
// constellation_2             String? @map("constellation-2")
// constellation_3             String? @map("constellation-3")
// constellation_4             String? @map("constellation-4")
// constellation_5             String? @map("constellation-5")
// constellation_6             String? @map("constellation-6")
// gacha_card                  String? @map("gacha-card")
// gacha_splash                String? @map("gacha-splash")
// icon                        String?
// icon_big                    String? @map("icon-big")
// icon_big_aether             String? @map("icon-big-aether")
// icon_big_lumine             String? @map("icon-big-lumine")
// icon_side                   String? @map("icon-side")
// icon_side_aether            String? @map("icon-side-aether")
// icon_side_lumine            String? @map("icon-side-lumine")
// outfit_opulent_splendor     String? @map("outfit-opulent-splendor")
// outfit_orchids_evening_gown String? @map("outfit-orchids-evening-gown")
// outfit_sea_breeze_dandelion String? @map("outfit-sea-breeze-dandelion")
// outfit_summertime_sparkle   String? @map("outfit-summertime-sparkle")
// portrait                    String?
// portraitf                   String?
// portraitm                   String?
// talent_burst                String? @map("talent-burst")
// talent_na                   String? @map("talent-na")
// talent_passive_0            String? @map("talent-passive-0")
// talent_passive_1            String? @map("talent-passive-1")
// talent_passive_2            String? @map("talent-passive-2")
// talent_passive_misc         String? @map("talent-passive-misc")
// talent_skill                String? @map("talent-skill")

import {objectType} from 'nexus';

export const Images = objectType({
  name: 'CharacterImages',
  definition(t) {
    t.field('card', {
      type: 'String',
    });
    t.field('constellation', {
      type: 'String',
    });
    t.field('constellation_1', {
      type: 'String',
    });
    t.field('constellation_2', {
      type: 'String',
    });
    t.field('constellation_3', {
      type: 'String',
    });
    t.field('constellation_4', {
      type: 'String',
    });
    t.field('constellation_5', {
      type: 'String',
    });
    t.field('constellation_6', {
      type: 'String',
    });
    t.field('gacha_card', {
      type: 'String',
    });
    t.field('gacha_splash', {
      type: 'String',
    });
    t.field('icon', {
      type: 'String',
    });
    t.field('icon_big', {
      type: 'String',
    });
    t.field('icon_big_aether', {
      type: 'String',
    });
    t.field('icon_big_lumine', {
      type: 'String',
    });
    t.field('outfit_opulent_splendor', {
      type: 'String',
    });
    t.field('outfit_orchids_evening_gown', {
      type: 'String',
    });
    t.field('outfit_sea_breeze_dandelion', {
      type: 'String',
    });
    t.field('outfit_summertime_sparkle', {
      type: 'String',
    });
    t.field('portrait', {
      type: 'String',
    });
    t.field('portraitf', {
      type: 'String',
    });
    t.field('portraitm', {
      type: 'String',
    });
    t.field('talent_burst', {
      type: 'String',
    });
    t.field('talent_na', {
      type: 'String',
    });
    t.field('talent_passive_0', {
      type: 'String',
    });
    t.field('talent_passive_1', {
      type: 'String',
    });
    t.field('talent_passive_2', {
      type: 'String',
    });
    t.field('talent_passive_misc', {
      type: 'String',
    });
    t.field('talent_skill', {
      type: 'String',
    });
  },
});
