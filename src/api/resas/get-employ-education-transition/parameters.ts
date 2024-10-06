export enum ResasClassification {
  Schooling = '1', // 進学
  Employment = '2', // 就職
}

export enum ResasMatter {
  Local = '0', // 地元進学
  Outflow = '1', // 流出
  Inflow = '2', // 流入
  NetInflow = '3', // 純流入
}

export enum ResasDisplayType {
  AllSchooling = '10', // すべての進学
  UniversitySchooling = '11', // 大学進学
  JuniorCollegeSchooling = '12', // 短期大学進学
  Employment = '20', // 就職
}

export enum ResasGender {
  All = '0', // 総数
  Male = '1', // 男性
  Female = '2', // 女性
}

export type GetEmployEducationTransitionParams = {
  prefectureCd: number;
  classification: ResasClassification;
  matter: ResasMatter;
  displayType: ResasDisplayType;
  gender: ResasGender;
};
