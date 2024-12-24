import { HymnModal } from "@/components/HymnModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const officiatingMinisters = [
  "Pastor Peter Osawe – Resident Pastor LFC IRRUA",
  "Pastor Olushola Rotifa – Assistant Resident Pastor",
  "Pastor Monday Agbebaku – Associate Pastor",
  "Pastor Gold Amuwah",
  "Pastor Isaiah Omokhodion",
  "Pastor Israel Kwaghdoo",
  "Pastor Folorunsho Emmanuel",
  "Pastor Jubrin Momodu",
];

const orderOfServiceOfSongs = [
  "Opening prayer",
  "Praise and worship",
  {
    type: "hymn",
    title: "Rock of Ages",
    lyrics:
      "Rock of Ages, cleft for me,\nLet me hide myself in Thee;\nLet the water and the blood,\nFrom Thy wounded side which flowed,\nBe of sin the double cure,\nSave from wrath and make me pure. Rock of Ages, cleft for me,\n\nNot the labor of my hands\nCan fulfill Thy law’s demands;\nCould my zeal no respite know,\nCould my tears forever flow,\nAll could never sin erase,\nThou must save, and save by grace.\n\nNothing in my hands I bring,\nSimply to Thy cross I cling;\nNaked, come to Thee for dress,\nHelpless, look to Thee for grace:\nFoul, I to the fountain fly,\nWash me, Savior, or I die.\n\nWhile I draw this fleeting breath,\nWhen mine eyes shall close in death,\nWhen I soar to worlds unknown,\nSee Thee on Thy judgment throne,\nRock of Ages, cleft for me,\nLet me hide myself in Thee.",
  },
  "First bible Reading",
  {
    type: "hymn",
    title: "In Christ Alone",
    lyrics:
      "In Christ alone my hope is found,\nHe is my light, my strength, my song;\nThis Cornerstone, this solid Ground,\nFirm through the fiercest drought and storm.\nWhat heights of love, what depths of peace,\nWhen fears are stilled, when strivings cease!\nMy Comforter, my All in All,\nHere in the love of Christ I stand.\n\nIn Christ alone! – who took on flesh,\nFullness of God in helpless babe.\nThis gift of love and righteousness,\nScorned by the ones He came to save:\nTill on that cross as Jesus died,\nThe wrath of God was satisfied –\nFor every sin on Him was laid;\nHere in the death of Christ I live.\n\nThere in the ground His body lay,\nLight of the world by darkness slain:\nThen bursting forth in glorious day\nUp from the grave He rose again!\nAnd as He stands in victory\nSin’s curse has lost its grip on me,\nFor I am His and He is mine –\nBought with the precious blood of Christ.\n\nNo guilt in life, no fear in death,\nThis is the power of Christ in me;\nFrom life’s first cry to final breath,\nJesus commands my destiny.\nNo power of hell, no scheme of man,\nCan ever pluck me from His hand:\nTill He returns or calls me home,\nHere in the power of Christ I’ll stand.",
  },
  "Second bible reading",
  {
    type: "hymn",
    title: "When the Morning Comes",
    lyrics:
      "Trials dark on every hand,\nAnd we cannot understand\nAll the ways that God would lead us\nTo that blessed Promised Land;\nBut He'll guide us with His eye,\nAnd we'll follow till we die;\nWe will understand it better by and by.\n\n(Refrain)\nBy and by, when the morning comes,\nWhen the saints are gath'ring home,\nWe will tell the story how we've overcome;\nWe will understand it better by and by.\n\nOft our cherished plans have failed,\ndisappointments have prevailed,\nAnd we've wandered in the darkness,\nheavyhearted and alone;\nBut we're trusting in the Lord,\nand, according to His Word,\nWe will understand it better by and by.\n\n(refrain)\n\nTemptations, hidden snares,\noften take us unawares,\nAnd our human hearts are burdened\nwith temptation, grief, and pain;\nBut the Lord has promised grace,\nand a dwelling place we'll trace,\nWe will understand it better by and by.\n\n(refrain)\n\nOh, why murmur and complain\nwhen the days are filled with pain?\nWhy not trust our blessed Savior,\nHe will all our needs supply;\nIn our home beyond the sky,\nwe will know and understand it better by and by.",
  },
  "Testimony of the life of the departed",
  "Special ministration",
  "The word",
  "Special prayer for the family",
  {
    type: "hymn",
    title: "I Surrender All",
    lyrics:
      "All to Jesus I surrender,\nAll to Him I freely give;\nI will ever love and trust Him,\nIn His presence daily live.\n\nI surrender all,\nI surrender all.\nAll to Thee, my blessed Savior,\nI surrender all.\n\nI surrender all, to Jesus Christ my King\nI surrender everything\nOh, I surrender all my hopes and all my dreams\nI surrender all, and give You everything\n\nAll to Jesus I surrender,\nHumbly at His feet I bow\nPleasures of this world, I Would gladly trade\nTake it all Lord take me now\n\nI surrender all, to Jesus Christ my King\nI surrender everything\nOh, I surrender all my hopes and all my dreams\nI surrender all, and give You everything\n\nAll to Jesus I surrender all\nOh to feel thy sacred flame\nLove’s salvation born, filling us with joy\nGlory, glory to His Name!",
  },
  "Announcements and recognition",
  "Vote of thanks",
  "Closing Prayer and benediction",
  {
    type: "hymn",
    title: "It Is Well with My Soul",
    lyrics:
      "When peace like a river attendeth my way,\nWhen sorrows like sea billows roll;\nWhatever my lot, Thou hast taught me to say,\nIt is well, it is well with my soul.\nIt is well (it is well),\nWith my soul (with my soul),\nIt is well, it is well with my soul.\n\nThough Satan should buffet, though\ntrials should come,\nLet this blest assurance control,\nThat Christ hath regarded my helpless estate,\nAnd hath shed His own blood for my soul.\n\nMy sin—oh, the bliss of this glorious thought\nMy sin, not in part, but the whole,\nIs nailed to His Cross, and I bear it no more;\nPraise the Lord, praise the Lord, O my soul!\n\nFor me, be it Christ, be it Christ hence to live;\nIf dark hours about me shall roll,\nNo pang shall be mine, for in death as in life\nThou wilt whisper Thy peace to my soul.",
  },
];

const orderOfFuneralService = [
  "Opening prayer",
  "Praise and worship",
  {
    type: "hymn",
    title: "My Hope Is Built on Nothing Less",
    lyrics:
      "My hope is built on nothing less\nThan Jesus' blood and righteousness;\nI dare not trust the sweetest frame,\nBut wholly lean on Jesus' name.\nOn Christ, the solid Rock, I stand;\nAll other ground is sinking sand,\nAll other ground is sinking sand.\n\nWhen darkness veils His lovely face,\nI rest on His unchanging grace;\nIn every high and stormy gale,\nMy anchor holds within the veil.\n\nHis oath, His covenant, His blood,\nSupport me in the whelming flood;\nWhen all around my soul gives way,\nHe then is all my hope and stay.\n\nWhen He shall come with trumpet sound,\nOh, may I then in Him be found;\nIn Him, my righteousness, alone,\nFaultless to stand before the throne.",
  },
  "First bible Reading",
  "Biography",
  "Second bible reading",
  "Choir ministration",
  "The word",
  "Special prayer for the family",
  "Announcement and recognition",
  {
    type: "hymn",
    title: "Amazing Grace",
    lyrics:
      "Amazing grace! How sweet the sound\nThat saved a wretch like me!\nI once was lost, but now am found;\nWas blind, but now I see.\n\nThrough many dangers, toils and snares\nI have already come.\n‘Tis grace has brought me safe thus far\nAnd grace will lead me home.\n\nThe Lord has promised good to me,\nHis word my hope secures;\nHe will my shield and portion be\nAs long as life endures.\n\nyea, when this flesh and heart shall\nfail, And mortal life shall cease\nI shall possess within the veil,\nA life of joy and peace.\n\nThe earth shall soon dissolve like\nsnow, the sun forbear to shine.\nbut God, who called me here below,\nwill be forever mine.\n\nWhen we’ve been there ten thousand\nyears, Bright shining as the sun,\nWe’ve no less days to sing God’s\npraise Than when we’ve first begun.",
  },
  "Vote of thanks",
  "Closing Prayer and benediction",
  {
    type: "hymn",
    title: "God Be with You Till We Meet Again",
    lyrics:
      "God be with you till we meet again;\nBy His counsels guide, uphold you,\nWith His sheep securely fold you;\nGod be with you till we meet again.\nTill we meet, till we meet,\nTill we meet at Jesus' feet;\nTill we meet, till we meet,\nGod be with you till we meet again.\n\nGod be with you till we meet again!\nWhen life’s perils thick confound you.\nGod be with you till we meet again.\ntill we meet, ...\n\nGod be with you till we meet again!\nKeep love’s banner floating o’er you;\nSmile death’s threat’ning wave before you.\nGod be with you till we meet again.\ntill we meet,...",
  },
];

export default function ProgrammePage() {
  return (
    <Card className="max-w-4xl mx-auto bg-white bg-opacity-90 shadow-xl rounded-lg overflow-hidden mb-8">
      <CardHeader className="text-center bg-gradient-to-r from-green-600 to-blue-600 text-white py-6">
        <CardTitle className="text-4xl font-bold">Programme</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Officiating Ministers
          </h2>
          <ul className="list-disc pl-6">
            {officiatingMinisters.map((minister, index) => (
              <li key={index} className="mb-2">
                {minister}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Order of Service of Songs
          </h2>
          <ol className="list-decimal pl-6">
            {orderOfServiceOfSongs.map((item, index) => (
              <li key={index} className="mb-2">
                {typeof item === "string" ? (
                  item
                ) : (
                  <HymnModal title={item.title} lyrics={item.lyrics} />
                )}
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Order of Funeral Service
          </h2>
          <ol className="list-decimal pl-6">
            {orderOfFuneralService.map((item, index) => (
              <li key={index} className="mb-2">
                {typeof item === "string" ? (
                  item
                ) : (
                  <HymnModal title={item.title} lyrics={item.lyrics} />
                )}
              </li>
            ))}
          </ol>
        </section>
      </CardContent>
    </Card>
  );
}
