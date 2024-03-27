import vine from '@vinejs/vine'

export const userProfileValidator = vine.compile(
  vine.object({
    genre: vine.enum(['homme', 'femme', 'robot', 'transgenre', 'transexuel', 'transformers']),
    orientation: vine.enum(['hétéro', 'homo', 'pas difficile', 'plug & play']),
    size: vine.number().optional(),
    weight: vine.number().optional(),
    penis_size: vine.number().optional(),
    bra_cup: vine.string().optional(),
    hairColor: vine.string().optional(),
    eyeColor: vine.string().optional(),
  })
)

export const userProfileExistValidator = vine.compile(
  vine.object({
    params: vine.object({
      id: vine.number().exists(async (query, id) => {
        const userProfile = await query.from('user_profiles').where('user_id', id).first()
        return !!userProfile
      }),
    }),
  })
)
