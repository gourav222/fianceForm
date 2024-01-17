export const investMentDetailDataMapper = (investDetailsData: any) => {
  return {
    accountType: investDetailsData[0].current.value,
    portfolio: investDetailsData[1].current.value,
    fundFeeCategory: investDetailsData[2].current.value,
    investmentCategory: investDetailsData[3].current.value,
    communicationAddress: investDetailsData[4].current.value,
    country: investDetailsData[5].current.value,
    accountHolder: investDetailsData[6].current.value,
    quantamInvestment: investDetailsData[7].current.value,
    investmentMode: investDetailsData[8].current.value,
  };
};

export const applicantDetailDataMapper = (applicantDetail: any) => {
  return {
    applicantName: applicantDetail[0].current.value,
    contactNum: applicantDetail[1].current.value,
    numOTP: applicantDetail[2].current.value,
    email: applicantDetail[3].current.value,
    emailOTP: applicantDetail[4].current.value,
    panCardNum: applicantDetail[5].current.value,
    dateOfBirth: applicantDetail[6],
    panCard: applicantDetail[7],
    aadharCard: applicantDetail[8]
  };
};

export const bankPreferenceMapper = (banckPreference: any) => {
  return {
    bankDetails: banckPreference[0],
    bankName: banckPreference[1].current.value,
    accountNum: banckPreference[2].current.value,
    accountTitle: banckPreference[3].current.value,
    bankIFSC: banckPreference[4].current.value,
  };
};

export const nomieeDetailsMapper = (nomieeDetails: any) => {
  return {
    nomieeName: nomieeDetails[0].current.value,
    nomieePan: nomieeDetails[1].current.value,
    nomieeEmail: nomieeDetails[2].current.value,
    nomieeContactNum: nomieeDetails[3].current.value,
    nomieeDateOfBirth: nomieeDetails[4],
    nomieeRelation: nomieeDetails[5].current.value,
    nomieePercent: nomieeDetails[6].current.value,
  };
};

export const riskProfilerMapper = (riskProfiler: any) => {
  return {
    investmentExp: riskProfiler[0],
    investStyle: riskProfiler[1],
    diversified: riskProfiler[2],
    investMentObj: riskProfiler[3].current.value,
    riskTolerance: riskProfiler[4].current.value,
    horizon: riskProfiler[5],
    capcha: riskProfiler[6],
    reCapcha: riskProfiler[7].current.value
  };
};
