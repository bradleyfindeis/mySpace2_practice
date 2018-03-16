x = 0
30.times do 
  x += 1
  user = User.create(
    name: Faker::BackToTheFuture.character,
    image: Faker::Avatar.image,
    email: "test#{x}@test.com",
    password: 'password',
  )
  5.times do 
    Post.create(
    title: Faker::ChuckNorris.fact, 
    body: Faker::Hipster.paragraph, 
    user_id: user.id,
    )
  end 
end
