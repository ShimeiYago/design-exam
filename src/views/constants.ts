import {
  ResasClassification,
  ResasDisplayType,
  ResasGender,
  ResasMatter,
} from 'api/resas/get-employ-education-transition/parameters';

export const HEADER_HEIGHT = '48px';

export const TARGET_PREFECTURE_CD = 28;

export const RESAS_CLASSIFICATION_LABELS = {
  [ResasClassification.Schooling]: '進学',
  [ResasClassification.Employment]: '就職',
};

export const RESAS_MATTER_LABELS = {
  [ResasMatter.Local]: '地元',
  [ResasMatter.Outflow]: '流出',
  [ResasMatter.Inflow]: '流入',
  [ResasMatter.NetInflow]: '純流入',
};

export const RESAS_DISPLAY_TYPE_LABELS = {
  [ResasDisplayType.AllSchooling]: 'すべての進学',
  [ResasDisplayType.UniversitySchooling]: '大学進学',
  [ResasDisplayType.JuniorCollegeSchooling]: '短期大学進学',
  [ResasDisplayType.Employment]: '就職',
};

export const RESAS_GENDER_LABELS = {
  [ResasGender.All]: '総数',
  [ResasGender.Male]: '男性',
  [ResasGender.Female]: '女性',
};
