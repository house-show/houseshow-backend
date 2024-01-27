import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log(`Start seeding ...`);
  const tasks = [
    {
      name: 'Dishwashing',
      description: 'Wash all the dishes.',
      points: 10,
      imageUrl:
        'https://media.discordapp.net/attachments/1151980184560480456/1153090072246235246/orabazu_dish_washing_cosy_home_The_background_should_have_spark_5959f2b6-49e8-4e6c-a9f4-30de4b881e4b.png?ex=65c00ad0&is=65ad95d0&hm=e18625f31688c96140e05248aac84af0660b8f315dd41d948b1e2fad00e24142&=&format=webp&quality=lossless',
      imageUrlSmall:
        'https://media.discordapp.net/attachments/1151980184560480456/1153090072246235246/orabazu_dish_washing_cosy_home_The_background_should_have_spark_5959f2b6-49e8-4e6c-a9f4-30de4b881e4b.png?ex=65c00ad0&is=65ad95d0&hm=e18625f31688c96140e05248aac84af0660b8f315dd41d948b1e2fad00e24142&=&format=webp&quality=lossless&width=500&height=500',
    },
    {
      name: 'Vacuuming',
      description: 'Vacuum the entire house.',
      points: 15,
      imageUrl:
        'https://media.discordapp.net/attachments/1151980184560480456/1153091595336417290/orabazu_vacum_cleaner_scene_for_a_game_card_cozy_home_The_backg_c196e3f8-0a7d-43b6-8a17-4bb47de6a055.png?ex=65c00c3b&is=65ad973b&hm=d59b13e19f3d8ad6e1abc7e111d590eb80f178a9fddee971b7fa07043b8ebc3b&=&format=webp&quality=lossless',
      imageUrlSmall:
        'https://media.discordapp.net/attachments/1151980184560480456/1153091595336417290/orabazu_vacum_cleaner_scene_for_a_game_card_cozy_home_The_backg_c196e3f8-0a7d-43b6-8a17-4bb47de6a055.png?ex=65c00c3b&is=65ad973b&hm=d59b13e19f3d8ad6e1abc7e111d590eb80f178a9fddee971b7fa07043b8ebc3b&=&format=webp&quality=lossless&width=500&height=500',
    },
    {
      name: 'Laundry',
      description: 'Do the weekly laundry.',
      points: 10,
      imageUrl:
        'https://media.discordapp.net/attachments/1151980184560480456/1153090134972043305/orabazu_laundry_scene_cozy_home_The_background_should_have_spar_58424209-fed2-43c8-9952-e817071faa4c.png?ex=65c00adf&is=65ad95df&hm=a1e04f489a12a7eeec31992b4fa2057ca847935d6af1092e70b48b2732dbd8ff&=&format=webp&quality=lossless',
      imageUrlSmall:
        'https://media.discordapp.net/attachments/1151980184560480456/1153090134972043305/orabazu_laundry_scene_cozy_home_The_background_should_have_spar_58424209-fed2-43c8-9952-e817071faa4c.png?ex=65c00adf&is=65ad95df&hm=a1e04f489a12a7eeec31992b4fa2057ca847935d6af1092e70b48b2732dbd8ff&=&format=webp&quality=lossless&width=500&height=500',
    },
  ];

  for (const task of tasks) {
    const createdTask = await prisma.task.create({
      data: task,
    });
    console.log(`Created task with id: ${createdTask.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
