import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigation: { headerTitle: "", menuIcon: "" },
  dummyData: [
    {
      key: 0,
      data: {
        period: "15-09-2022",
        invoice_number: 315316243,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 1,
      data: {
        period: "24-10-2022",
        invoice_number: 123124,
        company_code: 4124,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 2,
      data: {
        period: "15-09-2022",
        invoice_number: 257435,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 3,
      data: {
        period: "15-09-2022",
        invoice_number: 412341,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 412,
      data: {
        period: "15-09-2022",
        invoice_number: 112411235,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 6,
      data: {
        period: "15-09-2022",
        invoice_number: 567856,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 7,
      data: {
        period: "15-09-2022",
        invoice_number: 1346177,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 8,
      data: {
        period: "15-09-2022",
        invoice_number: 95858434,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 11,
      data: {
        period: "15-09-2022",
        invoice_number: 315316243,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
    {
      key: 0,
      data: {
        period: "15-09-2022",
        invoice_number: 315316243,
        company_code: 231,
        contract_number: 346246,
      },
      Encabezado: {
        IdDoc: {
          TipoDTE: "110",
          FchEmis: "2019-05-28",
          IndServicio: "4",
        },
        Emisor: {
          RUTEmisor: "99581150-2",
        },
        Receptor: {
          RUTRecep: "55555555-5",
          RznSocRecep: "Empresa Extranjera",
          Extranjero: {
            Nacionalidad: "331",
          },
          GiroRecep: "Sin Giro",
          DirRecep: "Somewhere",
          CmnaRecep: "New Jersey",
          CiudadRecep: "New Jersey",
        },
        Totales: {
          TpoMoneda: "DOLAR USA",
          MntExe: "206",
          MntTotal: "206",
        },
        OtraMoneda: {
          TpoMoneda: "PESO CL",
          TpoCambio: "700",
          MntTotOtrMnda: "0",
        },
      },
      Detalle: [
        {
          IndExe: "1",
          NmbItem: "ALOJAMIENTO HABITACIONES",
          QtyItem: "1",
          PrcItem: "206",
          MontoItem: "206",
        },
      ],
      Referencia: [
        {
          TpoDocRef: "812",
          FolioRef: "ACME",
          FchRef: "2019-05-28",
          RazonRef: "RESOLUCION SNA",
        },
      ],
    },
  ],
};

const configurationSlice = createSlice({
  name: "configuration",
  initialState,
  reducers: {
    changeNavigation(state, action) {
      const { headerTitle, menuIcon } = action.payload;

      state.navigation = {
        headerTitle: headerTitle,
        menuIcon: menuIcon,
      };
    },
  },
});

export const { changeNavigation } = configurationSlice.actions;
export default configurationSlice.reducer;
