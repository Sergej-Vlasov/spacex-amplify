/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRockets = /* GraphQL */ `
  subscription OnCreateRockets {
    onCreateRockets {
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
export const onUpdateRockets = /* GraphQL */ `
  subscription OnUpdateRockets {
    onUpdateRockets {
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
export const onDeleteRockets = /* GraphQL */ `
  subscription OnDeleteRockets {
    onDeleteRockets {
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
export const onCreateLaunch = /* GraphQL */ `
  subscription OnCreateLaunch {
    onCreateLaunch {
      id
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
      success
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
          id
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
export const onUpdateLaunch = /* GraphQL */ `
  subscription OnUpdateLaunch {
    onUpdateLaunch {
      id
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
      success
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
          id
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
export const onDeleteLaunch = /* GraphQL */ `
  subscription OnDeleteLaunch {
    onDeleteLaunch {
      id
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
      success
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
          id
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
export const onCreatePayload = /* GraphQL */ `
  subscription OnCreatePayload {
    onCreatePayload {
      id
      name
      launch_name
      type
      reused
      launch {
        id
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
        success
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
export const onUpdatePayload = /* GraphQL */ `
  subscription OnUpdatePayload {
    onUpdatePayload {
      id
      name
      launch_name
      type
      reused
      launch {
        id
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
        success
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
export const onDeletePayload = /* GraphQL */ `
  subscription OnDeletePayload {
    onDeletePayload {
      id
      name
      launch_name
      type
      reused
      launch {
        id
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
        success
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
