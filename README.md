# sat-bounty
A self-hosted audience polling engine backed by Bitcoin

## dev setup

1. [install deno](https://deno.land/#installation)

2. install `denon` for that sweet, sweet live reloading during development

`deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts`

3. launch the API

`denon run --allow-env --allow-net --unsafely-ignore-certificate-errors=localhost app.ts`

## recommended tooling

[polar](https://lightningpolar.com/) is great for spawning virtual LN nodes

[hermes](https://github.com/newswangerd/hermes-curl) is great for quickly testing the API
