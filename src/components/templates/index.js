// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";

import ITE2007ComCert from "./ITE-2007-COM-CERT-COM1";
import ITE2007FulCert from "./ITE-2007-FUL-CERT-FULL1";
import ITE2007FulCertNoTS from "./ITE-2007-FUL-CERT-FULL1-NO-TSCPT";

import ITE2019ComCert from "./ITE-2019-COM-CERT-COM1";
import ITE2019ComCertNIEC from "./ITE-2019-COM-CERT-COM-NIEC1";

import ITE2019FulCert from "./ITE-2019-FUL-CERT-FULL1";
import ITE2019FulCertNoTS from "./ITE-2019-FUL-CERT-FULL1-NO-TSCPT";
import ITE2019FulCertNIEC from "./ITE-2019-FUL-CERT-FULL-NIEC1";
import ITE2019FulCertNIECNoTS from "./ITE-2019-FUL-CERT-FULL-NIEC1-NO-TSCPT";

import ITE2020ComCert from "./ITE-2020-COM-CERT-COM1";
import ITE2020ComCertNIEC from "./ITE-2020-COM-CERT-COM-NIEC1";

import ITE2020FulCert from "./ITE-2020-FUL-CERT-FULL1";
import ITE2020FulCertNoTS from "./ITE-2020-FUL-CERT-FULL1-NO-TSCPT";
import ITE2020FulCertNIEC from "./ITE-2020-FUL-CERT-FULL-NIEC1";
import ITE2020FulCertNIECNoTS from "./ITE-2020-FUL-CERT-FULL-NIEC1-NO-TSCPT";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  ITE_2007_COM_CERT_COM1: ITE2007ComCert,
  ITE_2007_FUL_CERT_FULL1: ITE2007FulCert,
  ITE_2007_FUL_CERT_FULL1_NO_TSCPT: ITE2007FulCertNoTS,
  ITE_2019_COM_CERT_COM1: ITE2019ComCert,
  ITE_2019_COM_CERT_COM_NIEC1: ITE2019ComCertNIEC,
  ITE_2019_FUL_CERT_FULL1: ITE2019FulCert,
  ITE_2019_FUL_CERT_FULL1_NO_TSCPT: ITE2019FulCertNoTS,
  ITE_2019_FUL_CERT_FULL_NIEC1: ITE2019FulCertNIEC,
  ITE_2019_FUL_CERT_FULL1_NIEC1_NO_TSCPT: ITE2019FulCertNIECNoTS,
  ITE_2020_COM_CERT_COM1: ITE2020ComCert,
  ITE_2020_COM_CERT_COM_NIEC1: ITE2020ComCertNIEC,
  ITE_2020_FUL_CERT_FULL1: ITE2020FulCert,
  ITE_2020_FUL_CERT_FULL1_NO_TSCPT: ITE2020FulCertNoTS,
  ITE_2020_FUL_CERT_FULL_NIEC1: ITE2020FulCertNIEC,
  ITE_2020_FUL_CERT_FULL1_NIEC1_NO_TSCPT: ITE2020FulCertNIECNoTS,
  NULL: []
};
