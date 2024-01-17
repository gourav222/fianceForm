import {
  investMentDetailDataMapper,
  applicantDetailDataMapper,
  bankPreferenceMapper,
  riskProfilerMapper,
  nomieeDetailsMapper,
} from "../utility/HandleFormData";
import { validateForm } from "../validation/validateForm";
export const handleFormData = async ({
  investDetailsData,
  applicantDetail,
  banckPreference,
  riskProfiler,
  nomieeDetails,
}: {
  investDetailsData: any;
  applicantDetail: any;
  banckPreference: any;
  riskProfiler: any;
  nomieeDetails: any;
}) => {
  const investMentDetailsData = investMentDetailDataMapper(investDetailsData);
  const applicantDetailData = applicantDetailDataMapper(applicantDetail);
  const bankPreferenceData = bankPreferenceMapper(banckPreference);
  const nomieeDetailsData = nomieeDetailsMapper(nomieeDetails);
  const riskProfilerData = riskProfilerMapper(riskProfiler);
  console.log("checked");
  const formUrl = `${process.env.REACT_APP_CREATE_FORM}/fianceForm`;
  let response;
  if (
    validateForm({
      investMentDetailsData,
      applicantDetailData,
      bankPreferenceData,
      nomieeDetailsData,
      riskProfilerData,
    })
  ) {
    response = await fetch(formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        investMentDetailsData,
        applicantDetailData,
        bankPreferenceData,
        nomieeDetailsData,
        riskProfilerData,
      }),
    });
  }

  console.log("Finance Data", response);
};

export const sendemailOTP = async ({ email }) => {
  let emailUrl = `${process.env.REACT_APP_CREATE_FORM}/sendEmail`;
  console.log(emailUrl, "lll");

  const response = await fetch(emailUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
};

export const verifyOtp = async ({ otp, email }) => {
  let verifyOtp = `${process.env.REACT_APP_CREATE_FORM}/verifyOTP`;
  const response = await fetch(verifyOtp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ otp, email }),
  });
};

export const resentOTP = async ({ email }) => {
  let resendOtp = `${process.env.REACT_APP_CREATE_FORM}/resendOTP`;
  const response = await fetch(resendOtp, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
};
