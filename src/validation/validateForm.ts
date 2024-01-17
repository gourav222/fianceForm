import * as EmailValidator from 'email-validator';
export const validateForm = ({
  investMentDetailsData,
  applicantDetailData,
  bankPreferenceData,
  nomieeDetailsData,
  riskProfilerData,
}: {
  investMentDetailsData: any;
  applicantDetailData: any;
  bankPreferenceData: any;
  nomieeDetailsData: any;
  riskProfilerData: any;
}) => {
  const {
    accountType,
    portfolio,
    fundFeeCategory,
    investmentCategory,
    communicationAddress,
    country,
    accountHolder,
    quantamInvestment,
    investmentMode,
  } = investMentDetailsData;

  const {
    applicantName,
    contactNum,
    numOTP,
    email,
    emailOTP,
    panCardNum,
    dateOfBirth,
    panCard,
    aadharCard,
  } = applicantDetailData;

  const { bankDetails, bankName, accountNum, accountTitle, bankIFSC } =
    bankPreferenceData;

  const {
    nomieeName,
    nomieePan,
    nomieeEmail,
    nomieeContactNum,
    nomieeDateOfBirth,
    nomieeRelation,
    nomieePercent,
  } = nomieeDetailsData;

  const {
    investmentExp,
    investStyle,
    diversified,
    investMentObj,
    riskTolerance,
    horizon,
    capcha,
    reCapcha,
  } = riskProfilerData;

  if (
    accountType.length === 0 ||
    portfolio.length === 0 ||
    fundFeeCategory.length === 0 ||
    investmentCategory.length === 0 ||
    communicationAddress.length === 0 ||
    country.length === 0 ||
    accountHolder.length === 0 ||
    quantamInvestment.length === 0 ||
    investmentMode.length === 0 ||
    applicantName.length === 0 ||
    contactNum.length === 0 ||
    numOTP.length === 0 ||
    email.length === 0 ||
    emailOTP.length === 0 ||
    panCardNum.length === 0 ||
    dateOfBirth.length === 0 ||
    panCard.length === 0 ||
    aadharCard.length === 0 ||
    bankDetails.length === 0 ||
    bankName.length === 0 ||
    accountNum.length === 0 ||
    accountTitle.length === 0 ||
    bankIFSC.length === 0 ||
    nomieeName.length === 0 ||
    nomieePan.length === 0 ||
    nomieeEmail.length === 0 ||
    nomieeContactNum.length === 0 ||
    nomieeDateOfBirth.length === 0 ||
    nomieeRelation.length === 0 ||
    investmentExp.length === 0 ||
    investStyle.length === 0 ||
    diversified.length === 0 ||
    investMentObj.length === 0 ||
    riskTolerance.length === 0 
    // horizon.length === 0 
    // reCapcha.length === 0
  ) {
    alert("Please fill all the mandatory fields");
    return false;
  } 
  
  else if (!EmailValidator.validate(email)) {
    alert("Invalid Email");
    return false;
  } 
  
  else if (capcha !== reCapcha) {
    alert("Invalid Capcha");
    return false;
  }

  return true;
};
