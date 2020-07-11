/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fetchRockets = /* GraphQL */ `
  query FetchRockets {
    fetchRockets {
      id
      name
      type
      active
      stages
      boosters
      cost_per_launch
      success_rate_pct
      first_flight
      country
      company
      height {
        meters
        feet
      }
      diameter {
        meters
        feet
      }
      mass {
        kg
        lb
      }
      payload_weights {
        id
        name
        kg
        lb
      }
      first_stage {
        reusable
        engines
        fuel_amount_tons
        burn_time_sec
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
      }
      second_stage {
        reusable
        engines
        fuel_amount_tons
        burn_time_sec
        thrust {
          kN
          lbf
        }
        payloads {
          option_1
        }
      }
      engines {
        number
        type
        version
        layout
        isp {
          sea_level
          vacuum
        }
        engine_loss_max
        propellant_1
        propellant_2
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
        thrust_to_weight
      }
      landing_legs {
        number
        material
      }
      flickr_images
      wikipedia
      description
    }
  }
`;
export const getRockets = /* GraphQL */ `
  query GetRockets($id: ID!) {
    getRockets(id: $id) {
      id
      name
      type
      active
      stages
      boosters
      cost_per_launch
      success_rate_pct
      first_flight
      country
      company
      height {
        meters
        feet
      }
      diameter {
        meters
        feet
      }
      mass {
        kg
        lb
      }
      payload_weights {
        id
        name
        kg
        lb
      }
      first_stage {
        reusable
        engines
        fuel_amount_tons
        burn_time_sec
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
      }
      second_stage {
        reusable
        engines
        fuel_amount_tons
        burn_time_sec
        thrust {
          kN
          lbf
        }
        payloads {
          option_1
        }
      }
      engines {
        number
        type
        version
        layout
        isp {
          sea_level
          vacuum
        }
        engine_loss_max
        propellant_1
        propellant_2
        thrust_sea_level {
          kN
          lbf
        }
        thrust_vacuum {
          kN
          lbf
        }
        thrust_to_weight
      }
      landing_legs {
        number
        material
      }
      flickr_images
      wikipedia
      description
      createdAt
      updatedAt
    }
  }
`;
export const listRocketss = /* GraphQL */ `
  query ListRocketss(
    $filter: ModelRocketsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRocketss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        active
        stages
        boosters
        cost_per_launch
        success_rate_pct
        first_flight
        country
        company
        height {
          meters
          feet
        }
        diameter {
          meters
          feet
        }
        mass {
          kg
          lb
        }
        payload_weights {
          id
          name
          kg
          lb
        }
        first_stage {
          reusable
          engines
          fuel_amount_tons
          burn_time_sec
        }
        second_stage {
          reusable
          engines
          fuel_amount_tons
          burn_time_sec
        }
        engines {
          number
          type
          version
          layout
          engine_loss_max
          propellant_1
          propellant_2
          thrust_to_weight
        }
        landing_legs {
          number
          material
        }
        flickr_images
        wikipedia
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
