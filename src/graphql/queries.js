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
export const fetchLaunches = /* GraphQL */ `
  query FetchLaunches {
    fetchLaunches {
      flight_number
      name
      date_utc
      date_unix
      date_local
      date_precision
      static_fire_date_utc
      static_fire_date_unix
      tdb
      net
      window
      rocket
      failures
      upcoming
      details
      fairings {
        reused
        recovery_attempt
        recovered
        ships
      }
      crew
      ships
      capsules
      payloads
      launchpad
      cores {
        core
        flight
        gridfins
        legs
        reused
        landing_attempt
        landing_success
        landing_type
        landpad
      }
      links {
        patch {
          small
          large
        }
        reddit {
          campaign
          launch
          media
          recovery
        }
        flickr {
          small
          original
        }
        presskit
        webcast
        youtube_id
        article
        wikipedia
      }
      auto_update
    }
  }
`;
export const fetchPayloads = /* GraphQL */ `
  query FetchPayloads {
    fetchPayloads {
      name
      type
      reused
      launch
      customers
      norad_ids
      nationalities
      manufacturers
      mass_kg
      mass_lbs
      orbit
      reference_system
      regime
      longitude
      semi_major_axis_km
      eccentricity
      periapsis_km
      apoapsis_km
      inclination_deg
      period_min
      lifespan_years
      epoch
      mean_motion
      raan
      arg_of_pericenter
      mean_anomaly
      dragon {
        capsule
        mass_returned_kg
        mass_returned_lbs
        flight_time_sec
        manifest
        water_landing
        land_landing
      }
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
export const getLaunch = /* GraphQL */ `
  query GetLaunch($name: String!) {
    getLaunch(name: $name) {
      name
      flight_number
      date_utc
      date_unix
      date_local
      date_precision
      static_fire_date_utc
      static_fire_date_unix
      tdb
      net
      window
      rocket
      failures
      upcoming
      details
      fairings {
        reused
        recovery_attempt
        recovered
        ships
      }
      crew
      ships
      capsules
      payloads {
        items {
          name
          launch_name
          type
          reused
          customers
          norad_ids
          nationalities
          manufacturers
          mass_kg
          mass_lbs
          orbit
          reference_system
          regime
          longitude
          semi_major_axis_km
          eccentricity
          periapsis_km
          apoapsis_km
          inclination_deg
          period_min
          lifespan_years
          epoch
          mean_motion
          raan
          arg_of_pericenter
          mean_anomaly
          createdAt
          updatedAt
        }
        nextToken
      }
      launchpad
      cores {
        core
        flight
        gridfins
        legs
        reused
        landing_attempt
        landing_success
        landing_type
        landpad
      }
      links {
        patch {
          small
          large
        }
        reddit {
          campaign
          launch
          media
          recovery
        }
        flickr {
          small
          original
        }
        presskit
        webcast
        youtube_id
        article
        wikipedia
      }
      auto_update
      createdAt
      updatedAt
    }
  }
`;
export const listLaunchs = /* GraphQL */ `
  query ListLaunchs(
    $name: String
    $filter: ModelLaunchFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLaunchs(
      name: $name
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        name
        flight_number
        date_utc
        date_unix
        date_local
        date_precision
        static_fire_date_utc
        static_fire_date_unix
        tdb
        net
        window
        rocket
        failures
        upcoming
        details
        fairings {
          reused
          recovery_attempt
          recovered
          ships
        }
        crew
        ships
        capsules
        payloads {
          nextToken
        }
        launchpad
        cores {
          core
          flight
          gridfins
          legs
          reused
          landing_attempt
          landing_success
          landing_type
          landpad
        }
        links {
          presskit
          webcast
          youtube_id
          article
          wikipedia
        }
        auto_update
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPayload = /* GraphQL */ `
  query GetPayload($id: ID!) {
    getPayload(id: $id) {
      name
      launch_name
      type
      reused
      launch {
        name
        flight_number
        date_utc
        date_unix
        date_local
        date_precision
        static_fire_date_utc
        static_fire_date_unix
        tdb
        net
        window
        rocket
        failures
        upcoming
        details
        fairings {
          reused
          recovery_attempt
          recovered
          ships
        }
        crew
        ships
        capsules
        payloads {
          nextToken
        }
        launchpad
        cores {
          core
          flight
          gridfins
          legs
          reused
          landing_attempt
          landing_success
          landing_type
          landpad
        }
        links {
          presskit
          webcast
          youtube_id
          article
          wikipedia
        }
        auto_update
        createdAt
        updatedAt
      }
      customers
      norad_ids
      nationalities
      manufacturers
      mass_kg
      mass_lbs
      orbit
      reference_system
      regime
      longitude
      semi_major_axis_km
      eccentricity
      periapsis_km
      apoapsis_km
      inclination_deg
      period_min
      lifespan_years
      epoch
      mean_motion
      raan
      arg_of_pericenter
      mean_anomaly
      dragon {
        capsule
        mass_returned_kg
        mass_returned_lbs
        flight_time_sec
        manifest
        water_landing
        land_landing
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPayloads = /* GraphQL */ `
  query ListPayloads(
    $filter: ModelPayloadFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayloads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        name
        launch_name
        type
        reused
        launch {
          name
          flight_number
          date_utc
          date_unix
          date_local
          date_precision
          static_fire_date_utc
          static_fire_date_unix
          tdb
          net
          window
          rocket
          failures
          upcoming
          details
          crew
          ships
          capsules
          launchpad
          auto_update
          createdAt
          updatedAt
        }
        customers
        norad_ids
        nationalities
        manufacturers
        mass_kg
        mass_lbs
        orbit
        reference_system
        regime
        longitude
        semi_major_axis_km
        eccentricity
        periapsis_km
        apoapsis_km
        inclination_deg
        period_min
        lifespan_years
        epoch
        mean_motion
        raan
        arg_of_pericenter
        mean_anomaly
        dragon {
          capsule
          mass_returned_kg
          mass_returned_lbs
          flight_time_sec
          manifest
          water_landing
          land_landing
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const fetchLaunc = /* GraphQL */ `
  query FetchLaunc($params: QueryFetchLauncParamsInput!) {
    fetchLaunc(params: $params) {
      flight_number
      name
      date_utc
      date_unix
      date_local
      date_precision
      static_fire_date_utc
      static_fire_date_unix
      tdb
      net
      window
      rocket
      failures
      upcoming
      details
      fairings {
        reused
        recovery_attempt
        recovered
        ships
      }
      crew
      ships
      capsules
      payloads
      launchpad
      cores {
        core
        flight
        gridfins
        legs
        reused
        landing_attempt
        landing_success
        landing_type
        landpad
      }
      links {
        patch {
          small
          large
        }
        reddit {
          campaign
          launch
          media
          recovery
        }
        flickr {
          small
          original
        }
        presskit
        webcast
        youtube_id
        article
        wikipedia
      }
      auto_update
    }
  }
`;
export const fetchPayload = /* GraphQL */ `
  query FetchPayload($params: QueryFetchPayloadParamsInput!) {
    fetchPayload(params: $params) {
      name
      type
      reused
      launch
      customers
      norad_ids
      nationalities
      manufacturers
      mass_kg
      mass_lbs
      orbit
      reference_system
      regime
      longitude
      semi_major_axis_km
      eccentricity
      periapsis_km
      apoapsis_km
      inclination_deg
      period_min
      lifespan_years
      epoch
      mean_motion
      raan
      arg_of_pericenter
      mean_anomaly
      dragon {
        capsule
        mass_returned_kg
        mass_returned_lbs
        flight_time_sec
        manifest
        water_landing
        land_landing
      }
    }
  }
`;
