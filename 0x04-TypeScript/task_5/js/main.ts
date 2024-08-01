type MajorCreditsBrand = { readonly MajorCredits: unique symbol}
type MinorCreditBrand = { readonly MinorCredit: unique symbol}


interface MajorCredits {
  credits: number;
  brand: MajorCreditsBrand;
}
interface MinorCredit {
  credits: number;
  brand: MinorCreditBrand;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: {} as MajorCreditsBrand
  }
}
export function sumMinorCredit(subject1: MinorCredit, subject2: MinorCredit): MinorCredit {
  return {
    credits: subject1.credits + subject2.credits,
    brand: {} as MinorCreditBrand
  }
}