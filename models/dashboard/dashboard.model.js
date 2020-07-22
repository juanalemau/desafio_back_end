export default {
  detail: {
    number_applications: {
      title: "Número de Aplicações",
      amount: "100",
      icon_name: "collection",
      color: "default"
    },
    integration_time: {
      title: "Tempo Médio para Primeira Integração",
      amount: "2 dias",
      icon_name: "watch",
      color: "primary"
    },
    billing_year: {
      title: "Faturamento nos proximos 12 meses",
      amount: "$9.000",
      icon_name: "graph-up",
      color: "secondary"
    }
  },
  graph: {
    api_consumption: {
      list_categories: ['Ec. Varejo', 'Portador', 'Credenciador', 'Emissor', 'Comunidade'],
      data: [{
          name: 'Portador',
          data: [5, 3, 4, 7, 2]
        },
        {
          name: 'Token',
          data: [2, 2, 3, 2, 1]
        },
        {
          name: 'Bins',
          data: [3, 4, 4, 2, 5]
        },
        {
          name: 'Pricing',
          data: [3, 4, 4, 2, 5]
        },
        {
          name: 'Facilitador',
          data: [3, 4, 4, 2, 5]
        },
        {
          name: 'Hist. Trans.',
          data: [3, 4, 4, 2, 5]
        }
      ]
    },
    months_consumption: {
      list_categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      data: [{
          name: 'Realizado',
          type: 'column',
          yAxis: 1,
          data: [
            49.9,
            71.5,
            106.4,
            129.2,
            144.0,
            176.0,
            135.6,
            148.5,
            216.4,
            194.1,
            95.6,
            54.4
          ]
        },
        {
          name: 'Planejado',
          type: 'spline',
          data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
        }
      ]
    },
    application_ambient: {
      data: [{
        name: 'Aplicaçôes',
        colorByPoint: true,
        data: [{
            name: 'Sandbox',
            y: 15.0,
            drilldown: 'Sandbox'
          },
          {
            name: 'Stage',
            y: 9.0,
            drilldown: 'Stage'
          },
          {
            name: 'Produção',
            y: 13.0,
            drilldown: 'Produção'
          }
        ]
      }]
    },
    application_api: {
      data: [{
        data: [
          ['Comunidade', 12.0],
          ['Emissor', 19.0],
          ['Ec.Varejo', 26.0],
          ['Portador', 3.0],
          ['Credenciador', 21.0]
        ]
      }]
    }
  }
};
