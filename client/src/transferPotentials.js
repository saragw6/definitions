function PrintCurlFromJson(potentials) {
  potentials.forEach((entry) => {console.log(jsonToCurl(entry))});
}

function jsonToCurl(entry) {
  entry.action = 1;
  var curl = "curl -d \'" + JSON.stringify(entry).replace(/\'/g, "\'\\\'\'") + "\' -H \"Content-Type: application/json\" -X POST http://localhost:5000/entries";

  return curl;
}

const potentials = [
    {
        "timestamp": "2018-04-24T02:15:03.107Z",
        "term": "aspec",
        "definition": "\"Aspec\" means someone identifies on the asexual/aromantic spectrum. This can mean they're demisexual, aromantic, and much more!",
        "explanation": "Aspec is typically only used by aspec people, as asexual/aromantics don't have much visibility. This is used to be a sweeping term for anyone that either don't or rarely experience romantic or sexual attraction, and includes everyone that identifies under the umbrella! ",
        "identity": "Asexual Demiromantic (aspec!)"
    },
    {
        "timestamp": "2018-04-24T02:19:39.910Z",
        "term": "Gatekeeping",
        "definition": "Gatekeeping is where someone feels as if they are the ones in charge of deciding who is within a community or not, frequently excluding those who belong on poor opinions. ",
        "explanation": "An example of gatekeeping is gender gatekeeping - as some people believe anyone who doesn't fit the trans man/woman template aren't LGBT,  attempting to keep non binary individuals and other out of the community where they do belong.",
        "identity": "Asexual Demiromantic"
    },
    {
        "timestamp": "2018-04-24T02:52:43.015Z",
        "name": "Timothy K.",
        "term": "Abrosexual",
        "definition": "Abrosexuality is the fluency of sexual prefrence, much like genderfluid but with what gender you want to bang. ",
        "explanation": "I am abrosexual so one day I could be pansexual and the next I could be demisexual or straight or anything else. It only effects sexual desire and not romantic desire, so i could be dating a girl but not be sexually attracted to her one day, and the next day I would, but I'd still want her romantically. ",
        "identity": "I am abrosexual panromantic and genderfluid."
    },
    {
        "timestamp": "2018-04-24T03:35:36.986Z",
        "term": "keysmash /dmbsjavdkababd",
        "definition": "the classical term gays use when something is funny without trying to sound heterosexual (lmao or haha = het). ex. person a: look at this meme \nperson b: KDJKABSBAB ",
        "identity": "mexican american, fourteen, lesbian??, ca  "
    },
    {
        "timestamp": "2018-04-24T07:21:37.430Z",
        "term": "Pansexual",
        "definition": "Attraction regardless of gender. This is NOT the only orientation where people care about personality. "
    },
    {
        "timestamp": "2018-04-24T07:23:57.004Z",
        "term": "Bisexual",
        "definition": "Being attracted to more than one gender. In the case of bisexuality, the attraction might feel a little different for each gender, and you may lean more one way than the other. In the case of pansexuality, gender is not even in the equation. ",
        "identity": "bisexual, tired of people spreading misinformation"
    },
    {
        "timestamp": "2018-04-24T11:14:39.849Z",
        "name": "Jay!",
        "term": "Quoiromantic",
        "definition": "Quoiromantic (or WTFromantic) is when you feel no difference between or cannot tell any difference between romantic and platonic attraction. ",
        "explanation": "I want a s/o but not really. I want what I call a “super friend” so we do coupley things I just don’t really have the same attraction. ",
        "identity": "Quoi-biromantic asexual "
    },
    {
        "timestamp": "2018-04-24T11:26:25.501Z",
        "name": "Jay",
        "term": "A-spec",
        "definition": "The spectrum of asexuality, from being romantic and sexual (allosexual) to completely aro/ace",
        "explanation": "I’m ace and aro so loll"
    },
    {
        "timestamp": "2018-04-24T11:53:14.155Z",
        "term": "aspec",
        "definition": "Someone who is on the asexual/aromantic/asensual/anaesthetic/aplatonic/(other) spectrum.",
        "explanation": "For me this term meant community, a word to connect with others who share similar experiences with (the lack of, or conditional) attraction towards others."
    },
    {
        "timestamp": "2018-04-24T11:58:15.571Z",
        "term": "minromantic",
        "definition": "someone who is attracted to people who have genders that are Masculine In Nature (MIN)"
    },
    {
        "timestamp": "2018-04-24T12:10:04.608Z",
        "term": "gatekeeping",
        "definition": "The acts of excluding, harassing and/or invalidating others' and their identities. See also 'REG'",
        "explanation": "For me it meant queer/LGBT+ people that, believing they had more \"expertise\" and  \"knowledge\" about people's identities, told others they were not \"really queer/LGBT+/term\", that they were \"confused\", \"wrong\", and kicking them out of Pride events."
    },
    {
        "timestamp": "2018-04-24T12:16:11.504Z",
        "term": "therian",
        "definition": "not a LGBT+ term, but it means someone who identifies with, or as, a non-fictional/mythological animal from Earth, which may or may not be extinct (excluding humans)"
    },
    {
        "timestamp": "2018-04-24T12:23:11.364Z",
        "name": "J",
        "term": "lithsexual",
        "definition": "someone who feels sexual attraction that fades or disappears when actually engaging in sexual acts, entering a sexual relationship, and/or have their attraction reciprocated. see also 'akoisexual'",
        "identity": "qpoc, aspec with conflicted feelings about sex"
    },
    {
        "timestamp": "2018-04-24T12:28:28.692Z",
        "name": "J",
        "term": "akoisexual",
        "definition": "someone who feels sexual attraction that fades or disappears when actually engaging in sexual acts, entering a sexual relationship, and/or have their attraction reciprocated. see also 'lithsexual'",
        "identity": "qpoc, aspec with conflicted feelings about sex"
    },
    {
        "timestamp": "2018-04-24T12:32:41.382Z",
        "term": "qpoc",
        "definition": "umbrella term for someone who is both Queer and a Person Of Color. ",
        "explanation": "for me it means a term for easily finding people other than the \"white, gay people at Pride\" who I couldn't connect with, since they don't always struggle with being sexualized or have issues with religion/morals/taboos, etc"
    },
    {
        "timestamp": "2018-04-24T12:37:50.305Z",
        "term": "gai",
        "definition": "non-straight attraction, from nb people towards any gender (nblw, nblm, nblnb or all at once). Functionally similar to queer except SPECIFICALLY for nb people to describe their attraction to others. not a MOGAI term."
    },
    {
        "timestamp": "2018-04-24T16:48:34.888Z",
        "term": "aspec",
        "definition": "Anyone on the 'asexual' and/or 'aromantic' spectrums. People who never, rarely, only in certain circumstances or varyingly experience sexual and/or romantic attraction. Examples are 'demisexual', 'greyromantic', 'aceflux' and 'aroace'.",
        "identity": "demisexual, queer, non-binary, european "
    },
    {
        "timestamp": "2018-04-24T23:15:00.495Z",
        "name": "Jess",
        "term": "Bisexual",
        "definition": "Attraction to two genders, not necessarily male or female. ",
        "explanation": "I am a bisexual cis-female",
        "identity": "White, USA, 15, Female, Bisexual, ADHD, Anxiety/Panic disorders, Depression. Living:)"
    },
    {
        "timestamp": "2018-04-25T00:01:34.834Z",
        "name": "Riley",
        "term": "Demiboy",
        "definition": "A gender identity where a person feels partly like a boy but not fully. It might be used with other identities such as agender, genderfluid, etc. ",
        "explanation": "For me, I feel part boyish and part agender.  ",
        "identity": "A transmasculine person who's still discovering their full identity."
    },
    {
        "timestamp": "2018-04-25T00:21:47.644Z",
        "name": "jaydin",
        "term": "queer",
        "definition": "the term queer for me is an umbrella term. I struggled knowing if I was pan, lesbian, ace, aro, or a combination of them all. and it was mentally draining until I came across queer. I say I'm queer because queer is basically the thing that holds the lgbtq+ community together. everything is underneath it and I'm definitely more than one identity and since being able to call myself queer, I've felt much better about my identity. ",
        "identity": "white, michigan, 17, agender"
    },
    {
        "timestamp": "2018-04-25T04:35:23.254Z",
        "term": "Kiki",
        "definition": "More commonly know as stem.\nA lesbian who identifies as somewhere in between a femme and stud. \nIt was commonly used in the 1950s and 1960s in bars due to pressure to label oneself. It was used as an in between term.",
        "identity": "Sport Dyke(lesbian)"
    },
    {
        "timestamp": "2018-04-25T04:41:02.404Z",
        "term": "Sport Dyke",
        "definition": "A lesbian who identifies with playing sports more than anything. Typically they will dress in an athletic manner. Ex. Jeans, hoodies, athletic tees, baseball caps",
        "explanation": "I've played sports all my life and dress athletically so I use this term. ",
        "identity": "Lesbian"
    },
    {
        "timestamp": "2018-04-25T20:08:09.923Z",
        "name": "🌈🎤",
        "term": "Genderqueer",
        "definition": "It’s like nonbinary but like, in my feelings it’s like a Different kinda nonbinary like...detached from the binary if it makes sense",
        "explanation": "I’m multigender genderqueer and it’s like... one of my genders if it makes sense. Idk I’m not smart",
        "identity": "White, 21, ventulian, epicene, pansexual, aro-flux but predominantly panromantic"
    },
    {
        "timestamp": "2018-04-25T23:08:50.083Z",
        "term": "Homoflexible",
        "definition": "Gay, but with wiggle room"
    },
    {
        "timestamp": "2018-04-26T11:02:53.629Z",
        "term": "Polysensual or quasipolyplatonic",
        "definition": "As an Aro-Ace-Enby: so I don't want a romantic or sexual relationship, however I do feel the need to hug, kiss, cuddle (etc.) with some, but not all genders. However this is not inherently romantic because it is sensual affection (attraction) so basically it means feeling cuddly-attracted to some, but not all genders (more than 2 but not all).",
        "explanation": "Well I'm aromantic/asexual, so my attraction filters into a Qplatonic form, which I say is polysensual. (Sometimes I like to call it quasipolyplatonic)",
        "identity": "American, Singapore, 13, Nonbinary, Ace-Aro (and obviously quasipolyplatonic)"
    },
    {
        "timestamp": "2018-04-26T17:02:07.236Z",
        "name": "Lake",
        "term": "abro x 3",
        "definition": "Someone who is abroromantic, abrosexual, AND abrogender",
        "identity": "Polyam abrox3"
    },
    {
        "timestamp": "2018-04-26T20:09:17.368Z",
        "name": "Lukas",
        "term": "Autifemmeboy",
        "definition": "A boy identity, influenced by their autism, with a feminine side. can be trans.",
        "explanation": "I feel very not trans because of me being very feminine and my autism influencing my gender identity ",
        "identity": "14 swedish autistic transboy, bisexual and lithromantic "
    },
    {
        "timestamp": "2018-04-26T22:58:37.756Z",
        "name": "Skye",
        "term": "Asexual",
        "definition": "A person who does not experience sexual attraction, but can still be open to romantic attraction. ",
        "identity": "Asexual, nonbinary, teen"
    },
    {
        "timestamp": "2018-04-27T00:49:52.875Z",
        "name": "Casey",
        "term": "genderflux",
        "definition": "Someone who gender intensity varies. For instance, someone can some days feel like a girl, but the next can feel non binary or agender, and the next feel like a demigirl. But this is obviously applicable to boys too.",
        "identity": " - A genderflux homoromantic"
    },
    {
        "timestamp": "2018-04-27T00:46:16.653Z",
        "name": "Matty",
        "term": "Gender fluid",
        "definition": "Gender fluid means that ones identity changes over time. Often from male, female, both, or something inbetween. Ones gender expression may or may not match with their current identity. One also might change pronouns over time or might use the same one, it varies from person it person. Some may also experience gender dysphoria, some may not, or some may have changing amounts of gender dysphoria.",
        "explanation": "I've identified as gender fluid for a long while know and it fits me quite well as I often switch how I feel and want to present myself. I also experience varying levels of dysphoria depending on the day.",
        "identity": "15, gender fluid"
    },
    {
        "timestamp": "2018-04-27T02:38:34.567Z",
        "term": "Gatekeeping",
        "definition": "The act of trying to bar a group of people from the lgbtq+ community."
    },
    {
        "timestamp": "2018-04-27T16:04:02.649Z",
        "term": "Objectumsexual ",
        "definition": "When you are desirous of objects"
    },
    {
        "timestamp": "2018-04-27T22:25:59.868Z",
        "name": "alex",
        "term": "datemate",
        "definition": "a gender neutral term for a romantic partner",
        "explanation": "bc im nb, i like for whoever im with to refer to me as their datemate",
        "identity": "agender "
    },
    {
        "timestamp": "2018-04-28T01:49:17.359Z",
        "name": "Katie",
        "term": "queer",
        "definition": "An umbrella term that may be used to apply to a person who is not heterosexual, heteroromantic, AND cisgender. Was historically used as a slur, but was reclaimed by the LGBTQ+ community starting in the late 1980's.",
        "explanation": "I identify as queer as a biromantic demisexual because it's easier than getting into my complex orientation. It conveys everything that people need to know about me by telling them that I am not a cis-het person.",
        "identity": "cis woman, disabled, white, southern US"
    },
    {
        "timestamp": "2018-04-28T01:57:10.397Z",
        "name": "Katie",
        "term": "cisgender (colloquially: cis)",
        "definition": "Someone who considers their gender to match the sex assigned to them at birth. \nLiterature in queer studies may use AMAB/AFAB (assigned male/female at birth) or DMAB/DFAB (designated male/female at birth) to differentiate between the sexes. ",
        "explanation": "When I was born, the doctors wrote an \"F\" on my birth certificate because of my genitals. At 20 years old, I still identify as a woman because of how I define my gender. Because these two things match, I call myself a cis woman.",
        "identity": "woman, disabled, white, southern US, college student"
    },
    {
        "timestamp": "2018-04-28T02:35:43.511Z",
        "name": "Elizabeth King",
        "term": "Polysexual",
        "definition": "Sexual attraction to many genders.",
        "explanation": "I identify as a queer, polysexual woman under the bisexual+ umbrella on the multi-gender attracted spectrum.",
        "identity": "Cis-woman, disabled, neurodivergent, lower middle-class, white."
    },
    {
        "timestamp": "2018-04-29T00:01:33.442Z",
        "name": "Niel Drawne",
        "term": "Gatekeeping",
        "definition": "The rejection/denial of part of a person's identity, because it is seen by the rejector as not authentic. Examples: Denying a person's trans identity because they don't feel dysphoria. Denying a religious queer person as part of the queer community, for their faith.",
        "explanation": "If my actual life comes up in a discussion on dating apps, my religious faith often is seen as a sign of immaturity or self-hatred, to downplay my understanding of myself (in terms of queerness). ",
        "identity": "Black, Bi, Undergrad, Cis male, East Coast"
    },
    {
        "timestamp": "2018-04-29T17:29:44.887Z",
        "term": "demi-nonbinary",
        "definition": "Someone who fully experiences one or both of the binary genders (man and woman) but also experiences being nonbinary (not 100% man/woman and/or only man/woman) to a lesser degree. Falls under the demigender umbrella.",
        "explanation": "I'm lowkey questioning whether I'm a demi-nonbinary girl. Sometimes the label feels almost right, and sometimes it feels ridiculous to think of myself as anything other than cis, but both temporary and life-long uncertainty are okay! All I gotta do is try and live my best life and things will fall into place.",
        "identity": "white, west coast of US, questioning demi-nonbinary girl, lesbian, middle class, 15"
    },
    {
        "timestamp": "2018-05-01T01:26:03.986Z",
        "name": "Rich",
        "term": "GenderQueer",
        "definition": "Being simultaneously man woman and neither",
        "explanation": "My gender is basically always everything and nothing all at the same time, thus genderqueer (simultaneously man, woman, and neither)",
        "identity": "Trans, specifically GenderQueer, plus my sexual orientation is also queer... so im genderqueer squared, haha, get it, im a genderqueer queer..."
    },
    {
        "timestamp": "2018-05-01T01:28:14.232Z",
        "name": "Amy",
        "term": "ceterosexual",
        "definition": "sexual attraction to nonbinary people by a nonbinary person, nblnb only ",
        "identity": "nonbinary nblnb and nblw"
    },
    {
        "timestamp": "2018-05-01T01:28:52.426Z",
        "name": "Amy",
        "term": "ceteroromantic",
        "definition": "romantic attraction to nonbinary people only, to be used by nonbinary people",
        "identity": "nonbinary nblw, nblnb"
    },
    {
        "timestamp": "2018-05-01T22:24:22.109Z",
        "name": "Karlee",
        "term": "Pansexual",
        "definition": "Attraction to people regardless of gender"
    },
    {
        "timestamp": "2018-05-01T22:29:54.569Z",
        "name": "Karlee",
        "term": "Femme",
        "definition": "Femme (or fem) is a term for lesbians who subvert and redefine femininity as something performed for women and exclusive to men. This is the opposite of butch, which rejects femininity.",
        "identity": "Lesbian"
    },
    {
        "timestamp": "2018-05-02T22:10:57.067Z",
        "term": "Fluidflux",
        "definition": "A gender identity that is fluid between multiple identities and also changes in intensity from strong to agender or genderless. ",
        "identity": "Polygender fluidflux, nonbinary, pansexual"
    },
    {
        "timestamp": "2018-05-02T22:14:29.193Z",
        "term": "Sapiosexual",
        "definition": "being attracted to intelligence or to intelligent people, as opposed to `morosexual`."
    },
    {
        "timestamp": "2018-05-03T05:52:27.220Z",
        "name": "Sam Gibson",
        "term": "Demigender",
        "definition": "Can be demimale, demifemale or demiother and means to partially identify with a gender but not fully.",
        "explanation": "May mean you identify as transmasculine but are not entirely male. May mean you identify as transfeminine but not entirely female or may mean you identify as demiother and identify partially with another gender.",
        "identity": "Demimale, non binary, transmasculine"
    },
    {
        "timestamp": "2018-05-03T07:33:24.298Z",
        "name": "Siri ",
        "term": "Vexegender ",
        "definition": "Someone who doesn’t know what their gender is but, knows what their gender is aligned with (girl, boy, nonbinary, netrual ect. can be added as a suffix for an alignment) ",
        "explanation": "To me, it means having no clue what your gender is but, knowing you have a strong feeling of alignment. I can’t exactly put a label on my gender but, I know I have a connection to femininity. I often switch labels around a lot, trying to find what fits me best but, all of them feel a little off! ",
        "identity": "Black/Native American, Demi-girl/Girlflux?, 19, disabled "
    },
    {
        "timestamp": "2018-05-03T10:19:07.131Z",
        "name": "John",
        "term": "Yourself",
        "definition": "Being how I want to be no matter what other people say",
        "explanation": "By being myself no matter what i do during the day",
        "identity": "15 years old pansexual"
    },
    {
        "timestamp": "2018-05-03T12:05:44.512Z",
        "name": "Vi",
        "term": "Hadogender",
        "definition": "A xenogender connected to the deep sea and eldritch secrets.",
        "explanation": "A gender that is both scary and natural, something isn’t always pleasant to think about but is still supposed to exist."
    },
    {
        "timestamp": "2018-05-05T12:48:20.924Z",
        "name": "Sophie S.",
        "term": "Cupioromantic",
        "definition": "For me, it means that I enjoy the idea of a romantic relationship, but I have no interest in partaking in said relationship myself.",
        "explanation": "Sometimes, being cupio makes me feel insecure or that I'm \"not aro enough\", but I am slowly learning to accept myself and my identity.",
        "identity": "16 years old aroace"
    },
    {
        "timestamp": "2018-05-05T12:50:27.906Z",
        "name": "Sophie S.",
        "term": "Bellusromantic",
        "definition": "Similarly to cupioromantic, this orientation is associated with a desire for the \"cute\" or \"fluffy\" parts of a romantic relationship, while not actually feeling romantic attraction.",
        "identity": "16-year-old Female aroace"
    },
    {
        "timestamp": "2018-05-09T01:53:55.519Z",
        "term": "futch",
        "definition": "A mix of femme and butch. Not necessarily androgynous, but having attributes of both femme and butch.",
        "identity": "Nonbinary and pansexual"
    },
    {
        "timestamp": "2018-05-09T21:07:25.422Z",
        "term": "Lesbian",
        "definition": "A female interested in being romantically and sexually involved exclusively with other females. ",
        "identity": "Seattle, Lesbian, Age 23"
    },
    {
        "timestamp": "2018-05-09T22:15:22.185Z",
        "term": "Queer ",
        "definition": "People that love other people not caring about gender or sexual identity, but don’t want a tag",
        "explanation": "Everything, it helped me accepting I can like different kind of people and that that is all right ",
        "identity": "Pansexual"
    },
    {
        "timestamp": "2018-05-12T16:09:23.534Z",
        "name": "Kai",
        "term": "Non-Binary",
        "definition": "Non-Binary is when you don’t feel like a gender. It is also an umbrella term for most not cis conforming people. ",
        "explanation": "I use Non-Binary to identify because before I was identifying as Agender. But that was a label no one had heard about so I decided to use Non-Binary because it makes me feel comfortable in my own skin. ",
        "identity": "I am a white fourteen Non-Binary Queer Asexual"
    },
    {
        "timestamp": "2018-05-12T16:15:38.531Z",
        "term": "Polyfidelity",
        "definition": "Having more than one partner in an equal and closed relationship. "
    },
    {
        "timestamp": "2018-05-13T16:12:17.225Z",
        "term": "genderflow",
        "definition": "a gender which flows, similar to genderfluid, but which never stops changing and as such may never fit with any particular gender identities along the way",
        "identity": "genderflow nb aroace"
    },
    {
        "timestamp": "2018-05-17T00:02:27.208Z",
        "term": "Hitlerkin",
        "definition": "Feeling a connection to Hitler without any of their ideas",
        "explanation": "Been shunned by communities for being who I am",
        "identity": "Cisgender, Hitlerkin Male"
    },
    {
        "timestamp": "2018-05-18T23:05:24.051Z",
        "term": "Therian",
        "definition": "Not an LGBTQ+ term, but the communities overlap considerably: Identifying as, or strongly with, an earthly non-human animal on a non-physical (eg, mental/spiritual) level",
        "explanation": "Noticing subtle similarities between one's self and one or more non-human species, with a view of one's self as that species on some level",
        "identity": "Autistic trans chick, therian"
    },
    {
        "timestamp": "2018-05-18T23:10:45.418Z",
        "term": "Tea",
        "definition": "Truth, especially truth which may be considered harsh or unpopular to some, or surprising gossip implied to be true.",
        "explanation": "Often used to emphasize  subjective opinions, eg, \"The tea is...\", or \"...and that's the tea\". Alternately, used to refer to gossip about someone, with the act of spreading gossip referred to as \"pouring the tea\", and particularly scathing \"tea\" referred to as \"hot\"",
        "identity": "Autistic trans chick"
    },
    {
        "timestamp": "2018-05-18T23:19:02.561Z",
        "term": "Gatekeeping",
        "definition": "The act of barring or attempting to bar certain individuals from spaces, communities, or resources.",
        "explanation": "In practice this falls into two distinct categories. Firstly, \"medical gatekeeping\" refers to the act of cisgender health professionals trying to deny transgender individuals from accessing gender-affirming resources such as HRT, through various excuses, such as the person supposedly being too young, mentally ill, not distressed or dysphoric enough, being non-binary, or not spending enough time since having socially transitioned. Secondly, \"gatekeeping\" occurs when some members of a group or community consider some others \"invalid\" as members of that community, and try to block them from accessing that community and its spaces. Examples include transmisogynists trying to remove transgender women from women's spaces, \"True Trans\" and transmedicalist transphobes trying to block non-dysphoric, non-binary, and/or gender non-conforming trans people from trans spaces, or LGT people trying to bar bisexuals, asexuals, etc, from LGBTQ+ spaces and communities.",
        "identity": "Autistic trans chick, bi"
    },
    {
        "timestamp": "2018-05-18T23:23:30.412Z",
        "term": "Sapiosexual",
        "definition": "Attracted to intelligence ",
        "explanation": "This was a popular term briefly, but not long after fell out of favour, as many have pointed out that the concept of intelligence is impossible to truly measure at best, and at worst, founded on racist, ableist, and classist ideals. Furthermore, terms for orientations typically refer to which genders (if any) one is attracted to, while sapiosexuality instead describes a preference for a character trait"
    },
    {
        "timestamp": "2018-05-18T23:26:31.638Z",
        "term": "fmab",
        "definition": "Fullmetal Alchemist Brotherhood",
        "explanation": "The title of a popular anime series, this is not an LGBTQ+ term, but has on occasion been mistaken for a term such as \"amab\" and \"afab\" used in the trans community. Because of this, it has become somewhat of an in-joke within the trans community.",
        "identity": "Trans chick"
    },
    {
        "timestamp": "2018-05-19T19:19:40.193Z",
        "name": "Clay",
        "term": "Non binary",
        "definition": "I identify as both male and female and stick to an androgynous lifestyle",
        "explanation": "Same answer as above",
        "identity": "Non binary lesbian"
    },
    {
        "timestamp": "2018-05-21T02:36:32.333Z",
        "name": "Jay",
        "term": "cavusgender",
        "definition": "Your gender is different when you are depressed",
        "explanation": "I am a trans man, but when I am depressed or discouraged I feel like a girl. I don't truly identify with girlhood because it's not the gender that I want to be, or that makes me happy. But I have to acknowledge that my experience of gender is different at different times.\nAlso, I consider cavusgender as different than dysphoria because I'm not unhappy BECAUSE my gender feels wrong; rather, my gender feels wrong BECAUSE I am unhappy.\nI hope this helps."
    },
    {
        "timestamp": "2018-05-21T02:41:16.192Z",
        "name": "Jay",
        "term": "gatekeeping",
        "definition": "Gatekeeping is when someone tries to set limits and requirements on what it means to be LGBT+/queer. For example, a gatekeeper might say that you have to feel dysphoria and transition medically to be trans.",
        "explanation": "Gatekeeping is harmful because it just replaces traditional, restrictive standards with SLIGHTLY broader standards that still leave out a lot of people. I try to avoid gatekeepers online, but I still worry a lot about how people will judge me for how I express my sexuality and gender. I believe that everyone should be free to explore that kind of stuff how they like, whether or not it matches someone else's pattern of what LGBT+ or queer mean."
    },
    {
        "timestamp": "2018-05-21T02:47:29.377Z",
        "name": "Jay",
        "term": "gender identity",
        "definition": "Gender identity is a deep-seated feeling about part of your identity. It's hard to explain what that part means, and it's different for everyone. Clothes, behavior, activities, etc. can all reinforce someone's gender identity but do not have to define it because gender is an intangible experience.\nMany people's gender identities fall roughly into masculine or feminine categories, but not everyone. Also, \"feminine\" and \"masculine\" are defined loosely and in a variety of ways.",
        "explanation": "It took me a while to figure out that I was a trans man. For a long time I just thought I was apathetic about being a girl. I envied people who actually seemed to care about their gender. Eventually, I realized that I did care and that I was really a man."
    },
    {
        "timestamp": "2018-05-21T02:56:50.860Z",
        "name": "Jay",
        "term": "queer",
        "definition": "Queer is a word for any gender/sexuality combination that is not cis and straight. I believe it includes a-spec people (asexuals, aromantics, etc.) because it stands for anyone who is not what is considered \"default\".\nI also believe that it's OK to talk about the \"queer community\", as well as just individuals who refer to themselves as queer. Not all LGBT+ people identify as queer and vice versa- I think they are two overlapping communities. I understand that some people are not comfortable being referred to as queer, but there are also some people with lesser known genders who dislike \"LGBT\" because of the large emphasis that community has historically put on Lesbian, Gay, Bisexual and (binary) Trans identities as opposed to less-known ones. Therefore, anyone should be able to talk about the \"LGBT+ community\" OR the \"queer community\" depending on whether they identify more as LGBT+ or queer, however there should always be the understanding that they don't speak for everyone. I mean, nobody ever speaks for everyone anyway."
    },
    {
        "timestamp": "2018-05-23T09:30:33.258Z",
        "term": "polysexual",
        "definition": "Attraction to multiple genders. Some polysexuals are attracted to all genders, others have a gender or genders they aren't attracted to. Some polysexuals may be unsure what genders they are attracted to, but know they're attracted to more than one.\nThe first definition is a synonym to `pansexual`. Polysexual is a synonym under some (but not all) definitions of `bisexual`. Polysexual is included in the umbrella term `multisexual`.",
        "identity": "20, aporagender."
    },
    {
        "timestamp": "2018-05-23T09:38:34.936Z",
        "term": "multisexual",
        "definition": "Someone who is attracted to two or more genders. Umbrella term for `pansexual`, `bisexual`, `polysexual` and any other orientation involving attraction to multiple identities.",
        "identity": "aporagender polysexual"
    },
    {
        "timestamp": "2018-05-23T09:53:31.206Z",
        "term": "maverique",
        "definition": "A gender that is not male, female, or anything in between male or female. It is not gender neutral, but a stand alone gender on its own. If male and female were cyan and magenta, maverique would be yellow. Maverique is not a rejection of gender roles, but but an internally perceived gender. A maverique may look, or be, like anything. Maveriques may be feminine, masculine, both or neither.\n\nA maverique specific title equivalent to Ms, Mr, or Mx is Mv (pronounced \"miv\").",
        "explanation": "As a genderfluid person who is 99% maverique (and about 0.5% genderless, 0.5% androgyne) being called a guy, girl, or both feels wrong (except on the rare, RARE occasion I am androgyne or genderless. but that's very rare). Being called ambiguously gendered also feels wrong- my maverinity is not ambigiously between male or female, it is a strong feeling that stands on its own.",
        "identity": "I'm genderfluid but my main gender is maverique and/or aporagender"
    },
    {
        "timestamp": "2018-05-23T09:57:54.589Z",
        "term": "aporagender",
        "definition": "An umbrella term that refers to any gender that is not male, female, or anything in between. It does not refer to genderlessness, but rather it refers to a perceived sense of gender.\n\nAporagender can be shorted to ain (an acronym for \"aporagender in nature\")."
    },
    {
        "timestamp": "2018-05-24T16:22:32.998Z",
        "term": "Femme",
        "definition": "The joy of loving womanhood and using/altering it's more stereotyipical presentations in the hope of attracting other women who love women. Used under varying meanings in the US for over a century.",
        "explanation": "I am femme",
        "identity": "Agender Trans Lesbian"
    },
    {
        "timestamp": "2018-05-24T16:30:33.357Z",
        "name": "Nadica",
        "term": "Queer",
        "definition": "Queer is a personal identifier, a modifier, and an umbrella term for all who use it. Queer represents a distinct, and often forced, separation from mainstream society based upon an individual's sexual or gender.  While some choose to become non-threatening to white cisheteropatriarchy, queers refuse to stifle their individuality for the sake of \"normalcy\". Many people are \"queer as in fuck you\" meaning they choose the term as a political act against normative society and Lgbt organizations that attempt to assimilate (mostly cis white lesbian and gays) into mainstream capitalist, white supremacist society.",
        "explanation": "I am queer.",
        "identity": "Agender Trans Lesbian"
    },
    {
        "timestamp": "2018-05-24T16:32:48.987Z",
        "name": "Nadica",
        "term": "Bi",
        "definition": "An attraction to one or more groups of genders",
        "explanation": "My girlfriend is bi",
        "identity": "Agender Trans Lesbian"
    },
    {
        "timestamp": "2018-05-24T16:48:57.194Z",
        "name": "Nadiça",
        "term": "Egg",
        "definition": "The period of a trans woman's life when she is unaware, unable to deal with, or hiding the fact that she is a woman.  A period of time usually associated with 'second puberty' in which the egg participates in drag or crossdressing, delves into synthesizers, attempts to learn about womanhood in ways that are small, growing out their hair, or even starts hormones.  Many eggs are ignorant of their gender identity, though they feel a terrible longing to be feminine which is often unexpressed or expressed in diaries or letters to close friends. Many eggs comit self harm or suicide because of bullying or other societal pressures. Kurt Cobain is an example of an Egg.\n\nIt is uncouth for anyone other than trans women to refer to someone as an egg.  It's the same as a straight person claiming to have 'gaydar'.",
        "explanation": "I am trans.  I have been an egg",
        "identity": "Agender Trans Lesbian, 27, white, grad student"
    },
    {
        "timestamp": "2018-05-24T16:51:17.159Z",
        "term": "Gaff",
        "definition": "Any device or undergarment used in tucking.  Holds the penis and scrotum tucked in place (usually) without much discomfort.",
        "explanation": "I am trans",
        "identity": "Trans woman"
    },
    {
        "timestamp": "2018-05-24T17:02:26.929Z",
        "name": "Nadiça",
        "term": "Gatekeeping",
        "definition": "A constant effort by the more conservative in the LGBT+ community to exclude identities which have only recently come into the public eye.  Gatekeeping has always existed in the LGBT community beginning with lesbians, then bi folx, then trans folx.  It is the same train of thought that birthed trans exterminitory radical feminists  from the Lesbian Seperatist movements of the 1970s.",
        "explanation": "I am trans, so I know gatekeeping when I see it.",
        "identity": "Agender Trans Lesbian"
    },
    {
        "timestamp": "2018-05-25T20:16:12.326Z",
        "name": "Hannibal H Grimm",
        "term": "androgyne",
        "definition": "what it means to me: a neutral gender (either between male and female, or neither male nor female) that is presented androgynously",
        "explanation": "embodiment: i am beyond gender and by looking at me, one cannot assume my gender- it is impossible!",
        "identity": "gender: androgyne, genderfuck, maverique-- age: 24-- race: ethnically jewish and half-black-- location: midwest USA; pronouns: it/its/itself-- disabled and neurodivergent-- poor"
    },
    {
        "timestamp": "2018-05-25T20:19:03.421Z",
        "name": "Hannibal H Grimm",
        "term": "pomosexual",
        "definition": "definitely not heterosexual but beyond other orientations and unable to be defined by them. when one feels that current terminology is too simple to define their sexuality. 'pomo-' refers to 'post-modern'."
    },
    {
        "timestamp": "2018-05-26T01:05:52.911Z",
        "name": "Hannibal H Grimm",
        "term": "androgyne",
        "definition": "A person identifying and/or expressing gender\noutside of the gender binary. Other terms used include gender\nvariant, genderqueer, and gender non-conformist."
    },
    {
        "timestamp": "2018-05-28T00:12:34.536Z",
        "name": "Sam",
        "term": "Non-binary",
        "definition": "I define non-binary as any gender that is NOT exclusively contained to male and female (the binary genders). It can be used either as a specific term for someone’s gender or an umbrella term that encompasses agender, demiboy, demigirl, ect.",
        "explanation": "I am non-binary and I use they/them pronouns. I don’t identify as a boy or a girl, and I do get body dysphoria, which is why I’m currently trying to get a binder.",
        "identity": "White, NZ, 15, non-binary, asexual and panromantic"
    },
    {
        "timestamp": "2018-05-28T08:07:57.945Z",
        "name": "Aly",
        "term": "Platinum Star",
        "definition": "A gay man who is a gold star and was also born via c section so has basically never come in contact with a vagina.",
        "explanation": "I have only used this maybe once or twice but hear it kind of often and so I put it here for those that may not know",
        "identity": "Lesbian"
    },
    {
        "timestamp": "2018-05-28T08:15:48.035Z",
        "term": "Beard",
        "definition": "A straight person that a gay person uses as a way to hide the fact that they are gay. Ex. I’m a lesbian but I had a friend Matt that was my beard because I didn’t want anyone knowing I was a lesbian",
        "identity": "15 Lesbian"
    },
    {
        "timestamp": "2018-06-02T14:10:41.304Z",
        "name": "xenoqueer",
        "term": "pomosexual",
        "definition": "\"Post modern sexuality.\" An active rejection of traditional sexual and gender labels, and a belief that no single label or definition can adequately capture the true complexity of an individual's identity. Rooted in the post modernist movement's rejection of the idea of universal narratives and strict boundaries. Often compared to other terms rooted in rejection of boundaries, such as queer and exgender (x-gender). "
    },
    {
        "timestamp": "2018-06-02T14:16:08.085Z",
        "name": "xenoqueer",
        "term": "binarism",
        "definition": "The effects of enforcing a strict gender binary rooted in traditional Western definitions of male and female. Binarism impacts anyone who diverges from the expected roles of cisgender heterosexual male and cisgender heterosexual female. It impacts trans people, nonbinary people, gender non-conforming people, intersex people, and people who do not experience exclusively heterosexual+romantic attraction. As a tool of white colonialism, it especially impacts people of color, but does have negative impacts on white people as well. It is a sub-type of sexism.",
        "identity": "genderqueer, intersex, person of color, middle eastern immigrant to the us, poor, age 25-30, "
    },
    {
        "timestamp": "2018-06-02T14:20:28.203Z",
        "name": "xenoqueer",
        "term": "minromantic",
        "definition": "\"Masculine in nature romantic.\" A person, especially an asexual or nonbinary person, who feels romantic attraction to men, partial or nonbinary men, and other masculine identifying or masculine presenting people. This attraction may be exclusive, or combined with other types of romantic attraction, and may or may not include attraction to masculine women."
    },
    {
        "timestamp": "2018-06-02T14:24:51.895Z",
        "name": "xenoqueer",
        "term": "Therian",
        "definition": "An individual who identifies with or as a non-fantasy animal, such as crows, foxes, bees, etc. This identification may be spiritual, religious, or atheistic. While some therians do consider their identity to be a manifestation of mental illness or neurodivergence, most therians consider their identity to be spiritual rather than delusional. A type of otherkin. Often but not always a type of furry."
    },
    {
        "timestamp": "2018-06-02T14:28:25.327Z",
        "name": "xenoqueer",
        "term": "aspec",
        "definition": "Also called a-spec. Shortened from \"asexual and aromantic spectrums.\" A-spec people are those who identify at asexual, aromantic, or partially asexual or aromantic. This includes but is not limited to demisexual, grey asexual, lithromantic, fraysexual, and similar identities. Any individual who does not identify as both allosexual and alloromantic can be considered a-spec."
    },
    {
        "timestamp": "2018-06-02T14:32:54.653Z",
        "name": "xenoqueer",
        "term": "Kiki",
        "definition": "A type of queer gathering and celebration, similar to a small scale pride celebration (where small scale means on the scale of a house party). Kikis are often considered a type of stress release and relaxation, where queer people can freely be themselves, without needing to repress aspects of their identity for safety. Originally used by Black and Latino gay men, but generally considered acceptable for use by all queer people. Kikis are associated with gossip, friendly gatherings, and highly performative dress (eg, drag, en femme, camp)."
    },
    {
        "timestamp": "2018-06-02T14:37:44.592Z",
        "name": "xenoqueer",
        "term": "tea",
        "definition": "A slang term, referring to often ignored or unspoken truths. Used to celebrate speaking up and acting out about oppression. One spills tea when expressing these truths, and one refers to the tea as being hot when agreeing with these truths. For example: Alice says, \"cops shouldn't march in uniform at Pride! The first Pride was a riot against police violence!\" Bob, upon considering Alice's statement, agrees and responds approvingly with, \"that tea is hot.\""
    },
    {
        "timestamp": "2018-06-02T14:47:20.241Z",
        "name": "xenoqueer",
        "term": "gatekeeping",
        "definition": "The act of trying to limit access to queer community and identity to only acceptable groups, and exclude all others. In modern use, the acceptable groups are usually but not always lesbians, gay men, bisexual people attracted to or in relationships with people of their own gender(s), and dysphoric binary trans people. Gatekeeping often relies on historical revision and denial of the lived experiences of oppressed peoples. Popular targets for modern gatekeeping include questioning people, nonbinary people, and a-spec people, but all queer people other than healthy white gender conforming cisgender gay men attracted to other healthy white gender conforming cisgender men have been the targets of gatekeeping in the past, and any queer group may be the target of gatekeeping in the future."
    },
    {
        "timestamp": "2018-06-02T18:20:50.864Z",
        "name": "-s.b-",
        "term": "Cisgender",
        "definition": "Someone who feels as the sex they were assigned at birth.",
        "explanation": "I’m literally surrounded in a sea of cis.",
        "identity": "Transboy Omnisexual Who Needs Odin Smith"
    },
    {
        "timestamp": "2018-06-02T18:33:25.633Z",
        "name": "-s.b-",
        "term": "Finsexual",
        "definition": "Used mainly by nonbinary genders to describe them as attracted to women/feminity.",
        "explanation": "I’ve met a couple of enbies who use this term.",
        "identity": "Trans moon pie"
    },
    {
        "timestamp": "2018-06-06T21:58:40.430Z",
        "name": "Lou",
        "term": "Orbsian",
        "definition": "An `enby` who feels attraction (exclusively or not) to women.",
        "explanation": "I didn't invent the term, but I saw it pop up a ton of times in positivity blogs so i looked it up and started using it because it's lot more acurate than \"lesbian\" seeing as I'm NB... It's also a lot better for dysphoria.",
        "identity": "That one friendly genderfluid canadian"
    },
    {
        "timestamp": "2018-06-08T22:28:06.923Z",
        "name": "Lou",
        "term": "Orbisian",
        "definition": "An enby (not necessarily fem-aligned) who feels attraction (exclusively or not) to women",
        "explanation": "I heard of the term and immediately felt a connection. I'm genderfluid, and I used to use the word \"lesbian\" for myself, but the problem with that is that it made me very dysphoric on days where I felt more male/masc-aligned. So I use orbisian now! It's such an amazing label and I really really like it.",
        "identity": "A friendly genderfluid canadian"
    },
    {
        "timestamp": "2018-06-14T13:26:28.065Z",
        "term": "Tea",
        "definition": "A slang term to refer to gossip. Example: \"Hey, what's the tea for today?\" \nThis term originated from the drag community who would drink tea and gossip back stage before a performance. ",
        "identity": "25 year old queer woman"
    },
    {
        "timestamp": "2018-06-18T06:29:05.879Z",
        "term": "Dfab",
        "definition": "Acronym for \"designated female at birth\" meaning someone who, after being born, was told they were female (typically determined by a doctor based on genitalia). "
    },
    {
        "timestamp": "2018-06-18T06:30:36.020Z",
        "term": "Binarism",
        "definition": "The belief in a strict gender binary, or the belief that there are only two genders: male and female ",
        "identity": "Genderqueer"
    },
    {
        "timestamp": "2018-06-18T06:33:01.754Z",
        "term": "Gatekeeping ",
        "definition": "The act of a member of the LGBTQ+ community excluding other members that they believe don't \"belong\" in the community. For example: someone who believes that nonbinary and genderqueer people are not LGBT is gatekeeping nonbinary people."
    },
    {
        "timestamp": "2018-06-19T02:28:09.574Z",
        "name": "Justice",
        "term": "Twunk",
        "definition": "Twunk is a `Twink` (hairless, petite gay guy) but with rather defined muscles. A twunk is not extremely ripped though.",
        "explanation": "A lot of guys see this term as kind of a joke but I think it’s a real thing and I think it’s becoming more popular to see a lot of twunks around (cause of the whole gym, fit body hype)",
        "identity": "He/Him (Male) or They/Them (idc too much), Gay, Cis, Silesian-Dutch, Middle to Upper Class"
    },
    {
        "timestamp": "2018-06-27T11:07:49.794Z",
        "term": "Homoromantic",
        "definition": "Experiencing romantic attraction to the same gender. \nThis may be used in conjunction with a separate sexual attraction, such as homoromantic bisexual or homoromantic asexual. "
    },
    {
        "timestamp": "2018-06-27T23:55:02.695Z",
        "name": "Dylan Carter",
        "term": "Aroflux",
        "definition": "Someone who shifts around on the aromantic spectrum, or whose level of romantic attraction changes. ",
        "explanation": "I have had days where I’ve felt a huge amount of romantic attraction and been very affectionate with my partner, and days where I’ve felt no romantic attraction at all, even to the point of being repulsed by romance. Most days I fall somewhere in between, but where I fall changes from day to day, sometimes even week to week or month to month.",
        "identity": "I am an aroflux pansexual nonbinary boy. I’m polish-Canadian. "
    },
    {
        "timestamp": "2018-06-30T12:02:10.634Z",
        "term": "top",
        "definition": "A top is the one who gives during sex"
    },
    {
        "timestamp": "2018-07-04T23:03:55.760Z",
        "term": "aspec",
        "definition": "A person who falls somewhere on the aromantic or asexual spectrums",
        "identity": "Asexual DemiPanromantic"
    },
    {
        "timestamp": "2018-07-05T12:20:54.675Z",
        "name": "Meadow",
        "term": "multisexual",
        "definition": "Multisexual is an umbrella term that covers any sexuality that includes attraction to multiple genders (or, attraction to people with a lack of gender as well as attraction to a gender or genders). It therefore includes common multisexualities such as `bisexual`, `pansexual` and `polysexual`, as well as lesser known identities such as `versian`.",
        "explanation": "I like guys, ladies and enbies - not necessarily in that order, or in the same exact way.",
        "identity": "aporagender multisexual"
    },
    {
        "timestamp": "2018-07-10T03:16:11.764Z",
        "term": "Ambonec",
        "definition": "Ambonec means to have three parts to your gender, Masculine, Feminine, and Neither. It's like Trigender, except instead of having three genders, you've got three parts to one gender."
    },
    {
        "timestamp": "2018-07-10T03:48:59.905Z",
        "name": "CC",
        "term": "Genderfluid",
        "definition": "To be genderfluid is to experience shifts in gender. These shifts can stay for a day or for a month or only a few hours. Whatever the case, a genderfluid person will typically shift between two or more genders, most commonly male and female, and sometimes neither or both at once. Trying to label sexuality when one is genderfluid is incredibly difficult and often stressful.",
        "identity": "Genderfluid lesbian"
    }
];

// fetchPotentialPost(potentials[0]);

PrintCurlFromJson(potentials);