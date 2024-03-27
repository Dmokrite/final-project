import vine from '@vinejs/vine';


export const galleryValidator = vine.compile(
  vine.object({
    userId: vine.number(),
    fileName: vine.string(),
  })
);


export const fileExistValidator = vine.compile(
    vine.object({
        params: vine.object({
            name: vine.string().exists(async (query, name) => {
                const fileName = await query.from('galleries').where('file_name', name).first()
                return !!fileName
            }),
        }),
    })
);