import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`flex flex-wrap min-h-[100vh] max-w-[100vw] gap-5 p-24 ${inter.className}`}>
      <div className='flex flex-col gap-7'>
        <div className="self-center">
          <Image
            src="/hugo-nominee-1.jpeg"
            alt="hugo-nominee-1"
            width={300}
            height={315}>
          </Image>
          <p className='mt-7'>
          <span className='font-bold'>A lavish historical drama reimagining of The Island of Doctor Moreau set against the backdrop of nineteenth-century Mexico.</span>

Carlota Moreau: a young woman, growing up in a distant and luxuriant estate, safe from the conflict and strife of the Yucatán peninsula. The only daughter of either a genius, or a madman.

Montgomery Laughton: a melancholic overseer with a tragic past and a propensity for alcohol. An outcast who assists Dr. Moreau with his scientific experiments, which are financed by the Lizaldes, owners of magnificent haciendas and plentiful coffers.

The hybrids: the fruits of the Doctor’s labor, destined to blindly obey their creator and remain in the shadows. A motley group of part human, part animal monstrosities.

All of them living in a perfectly balanced and static world, which is jolted by the abrupt arrival of Eduardo Lizalde, the charming and careless son of Doctor Moreau’s patron, who will unwittingly begin a dangerous chain reaction.

For Moreau keeps secrets, Carlota has questions, and in the sweltering heat of the jungle, passions may ignite.

The Daughter of Doctor Moreau is both a dazzling historical novel and a daring science fiction journey.
          </p>
        </div>
        <div className="self-center">
          <Image
            src="/hugo-nominee-2.jpeg"
            alt="hugo-nominee-2"
            width={300}
            height={315}>
          </Image>
          <p className='mt-7'>
          When COVID-19 sweeps through New York City, Jamie Gray is stuck as a dead-end driver for food delivery apps. That is, until Jamie makes a delivery to an old acquaintance, Tom, who works at what he calls "an animal rights organization." Tom's team needs a last-minute grunt to handle things on their next field visit. Jamie, eager to do anything, immediately signs on.

What Tom doesn't tell Jamie is that the animals his team cares for are not here on Earth. Not our Earth, at least. In an alternate dimension, massive dinosaur-like creatures named Kaiju roam a warm and human-free world. They're the universe's largest and most dangerous panda and they're in trouble.

It's not just the Kaiju Preservation Society that's found its way to the alternate world. Others have, too--and their carelessness could cause millions back on our Earth to die.
          </p>
        </div>
        <div className="self-center">
          <Image
            src="/hugo-nominee-3.jpeg"
            alt="hugo-nominee-3"
            width={300}
            height={315}>
          </Image>
          <p className='mt-7'>
          After a lifetime of bounties and bloodshed, Viv is hanging up her sword for the last time.

The battle-weary orc aims to start fresh, opening the first ever coffee shop in the city of Thune. But old and new rivals stand in the way of success — not to mention the fact that no one has the faintest idea what coffee actually is.

If Viv wants to put the blade behind her and make her plans a reality, she won't be able to go it alone.

But the true rewards of the uncharted path are the travelers you meet along the way. And whether drawn together by ancient magic, flaky pastry, or a freshly brewed cup, they may become partners, family, and something deeper than she ever could have dreamed.
          </p>
        </div>
        <div className="self-center">
          <Image
            src="/hugo-nominee-4.jpeg"
            alt="book-sample-4"
            width={300}
            height={315}>
          </Image>
          <p className='mt-7'>
          Her city is under siege.

The zombies are coming back.

And all Nona wants is a birthday party.

In many ways, Nona is like other people. She lives with her family, has a job at her local school, and loves walks on the beach and meeting new dogs. But Nona's not like other people. Six months ago she woke up in a stranger's body, and she's afraid she might have to give it back.

The whole city is falling to pieces. A monstrous blue sphere hangs on the horizon, ready to tear the planet apart. Blood of Eden forces have surrounded the last Cohort facility and wait for the Emperor Undying to come calling. Their leaders want Nona to be the weapon that will save them from the Nine Houses. Nona would prefer to live an ordinary life with the people she loves, with Pyrrha and Camilla and Palamedes, but she also knows that nothing lasts forever.

And each night, Nona dreams of a woman with a skull-painted face...
          </p>
        </div>
        <div className="self-center">
          <Image
            src="/hugo-nominee-5.jpeg"
            alt="hugo-nominee-5"
            width={300}
            height={315}>
          </Image>
          <p className='mt-7'>
          After years of seeing her sisters suffer at the hands of an abusive prince, Marra—the shy, convent-raised, third-born daughter—has finally realized that no one is coming to their rescue. No one, except for Marra herself.

Seeking help from a powerful gravewitch, Marra is offered the tools to kill a prince—if she can complete three impossible tasks. But, as is the way in tales of princes, witches, and daughters, the impossible is only the beginning.

On her quest, Marra is joined by the gravewitch, a reluctant fairy godmother, a strapping former knight, and a chicken possessed by a demon. Together, the five of them intend to be the hand that closes around the throat of the prince and frees Marra's family and their kingdom from its tyrannous ruler at last.
          </p>
        </div>
        <div className="self-center">
          <Image
            src="/hugo-nominee-6.jpeg"
            alt="hugo-nominee-6"
            width={300}
            height={315}>
          </Image>
          <p className='mt-7'>
            Tesla Crane, a brilliant inventor and an heiress, is on her honeymoon on an interplanetary space liner, cruising between the Moon and Mars. She’s traveling incognito and is reveling in her anonymity. Then someone is murdered and the festering chowderheads who run security have the audacity to arrest her spouse. Armed with banter, martinis and her small service dog, Tesla is determined to solve the crime so that the newlyweds can get back to canoodling—and keep the real killer from striking again.
          </p>
        </div>
      </div>

    </main>
  )
}
