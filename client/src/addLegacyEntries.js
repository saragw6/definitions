function printCurlFromEntry(entry) {
    entry["last_updated"] = new Date().getTime();
    entry["action"] = 2;
	console.log("curl -d \'" + JSON.stringify(entry).replace(/\'/g, "\'\\\'\'") + "\' -H \"Content-Type: application/json\" -X POST http://localhost:5000/entries");
}

function printSynonymCurls(entry) {
    entry["sort-as"].forEach((synonym) => {
        console.log("curl -X POST http://localhost:5000/synonyms/" + escapeUrl(entry["term"]) + "/" + escapeUrl(synonym));
    })
}

function escapeUrl(text) {
    text = text.replace("(","%28");
    text = text.replace(")","%29");
    return encodeURIComponent(text);
}

function allCurlsFromEntries(entries) {
	entries.forEach((entry)=> {
        printCurlFromEntry(entry);
        printSynonymCurls(entry);
    }); //(entry) => printCurlFromEntry(enrty)
}


var defswithsort = [
    {
        "time_submitted": "2017-12-27T01:08:34.868Z",
        "name": "Agender Al",
        "term": "Polysexual",
        "definition": "Person who is attracted to more than one gender, synonyms can include `pansexual`, & `bisexual`",
        "sort-as": ["poly", "poly sexual", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2017-12-27T01:11:37.394Z",
        "name": "Kennedy",
        "term": "Polysexual",
        "definition": "Someone who has a sexual attraction to some genders, but not all.",
        "identity": "White cis lesbian",
        "sort-as": ["poly", "poly sexual", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2017-12-27T01:16:59.177Z",
        "name": "Kit",
        "term": "Agender",
        "definition": "Not a girl or a boy or not feeling like a male or female\nJust sorta nothing in the gender area",
        "identity": "Agender, non binary, queer",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T01:30:36.567Z",
        "name": "Agender Al",
        "term": "Agender",
        "definition": "Usually a person lacking gender. An agender person might be aligned with male, female, both, neutral, or neither.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T01:39:22.655Z",
        "name": "Shaw",
        "term": "Demisexual",
        "definition": "The term means being sexually attracted to a person who you feel an emotional connection with. I do believe this term is more open because it doesn’t focus on any gender so really anyone is free to define themselves as such. For me I like to say I’m a `queer` demi because I’ve only had connections with the same sex. I also like to say I’m a `lesbian` but I do feel comfortable with either label. I don’t feel like I should just limit myself to one label.",
        "identity": "19yo Latina Lesbian",
        "sort-as": ["demi", "demisexual", "demisexuality"]
    },
    {
        "time_submitted": "2017-12-27T01:52:52.047Z",
        "name": "Hattie",
        "term": "Lesbian",
        "definition": "A girl who likes girls. Or a woman aligned person who likes other women.",
        "identity": "White, England, 19, girl/butch, working class?",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T02:02:54.594Z",
        "term": "dyke",
        "definition": "a slur for a `lesbian`, usually a `butch` or gender nonconforming lesbian; sometimes reclaimed and used as a term of pride or endearment. Example: The Dyke March",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T02:05:21.725Z",
        "term": "lesbian",
        "definition": "a woman who loves other women (includes `cis` women and `trans` women) and is not interested in men",
        "identity": "lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T02:10:26.761Z",
        "term": "Pansexual",
        "definition": "Loving someone purely for who they are, unbiased by their gender, race or identity.",
        "identity": "16 year old lesbian from Australia",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T02:12:53.666Z",
        "term": "Asexual",
        "definition": "Not being attracted to people in a sexual way, but there is still the option of wanting sex for different reasons.",
        "identity": "I am a Mexican lesbian asexual",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-27T02:38:05.084Z",
        "name": "Mandy Lynn",
        "term": "Transgender",
        "definition": "Switching to the sex I was supposed to be born with",
        "identity": "White, Battle Creek Michigan, 38, female, unemployed, make money on the streets",
        "sort-as": ["trans", "transgender", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2017-12-27T02:42:25.411Z",
        "name": "Mandy",
        "term": "Gay",
        "definition": "Gay is Happy like I'm gay because I'm getting my hormones next week so I'm gay I'm happy OMG LOL",
        "identity": "White Battle Creek Michigan 38 female unemployed so I work the streets",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T03:22:13.159Z",
        "name": "Michayla Barg",
        "term": "Transgender*",
        "definition": "When someone was born into a body that doesn't match what their soul sees them as. A person who has now known thy self to a new level and wishes to find to become the person their soul sees them as.",
        "identity": "Caucasian, Transgender Female, 27 years old.",
        "sort-as": ["trans", "transgender", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2017-12-27T03:45:04.495Z",
        "name": "Elliot",
        "term": "Sapphic",
        "definition": "A broad term for anyone even remotely woman-alined that is attracted to anyone woman-alined. Women-alined people that are `bi`/`pan`/`ace`/`lesbian` can be in sapphic relationships. Sapphic to me is just love between women (2+) and is non-sexual.",
        "identity": "Lesbian, white, nonbinary, 19, afab, lower-middle class/poverty fluctuation",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T03:45:07.004Z",
        "name": "Charlie",
        "term": "queer",
        "definition": "Queer means you are either not `cis` or not het or both -- i'm personally `asexual`/`aromantic` exclusionary as I think that's an entirely different (medical) spectrum. Cis is identifying satisfactorily(happily i guess?) with the gender you were assigned at birth (male or female). Anyone that doesn't identify with their assigned gender could be queer. Anyone that's on the gender binary and is attracted to the opposite gender (a `trans` man being solely attracted to women is het) would be het but still queer. I think people that are off the traditional gender binary (man, woman) are automatically not heterosexual just because those terms aren't meant to define them. I suppose that means anyone attracted to `nonbinary` people is also not heterosexual and therefore queer.",
        "identity": "White, midwestern, 18, bigender lesbian, college student",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T04:50:01.846Z",
        "name": "FlyteWizard",
        "term": "Bisexual",
        "definition": "Attraction to yours and others.",
        "identity": "Queer / Bisexual, Female",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-27T04:55:22.590Z",
        "name": "Taylor",
        "term": "Queer",
        "definition": "I use this word as an umbrella term to cover basically any orientation or identification that isn't both `cis` and straight.",
        "identity": "White cis queer girl, I prefer not to label my sexuality but I'm in a relationship with a woman. Upper middle class and going to college on scholarship, so incredibly privileged in that regard",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:07:32.772Z",
        "term": "Gold Star Lesbian",
        "definition": "A woman that has never had sex with a man and identifies as a woman who is solely attracted to women.",
        "identity": "Lesbian, latina, 29",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:30:08.681Z",
        "name": "Quinn Wolf",
        "term": "lesbian",
        "definition": "A sexual and/or romantic orientation used by women and non-men (including `nonbinary` people but excluding men and men-aligned or `masculine-of-center` nonbinary people) to describe attraction to other women and non-men. The lesbian experience is unique in describing attraction by exclusion - lesbians can be attracted only to women or to women and nonbinary people, but the word cannot describe one who is genuinely attracted to men. Genuine attraction in this case refers to sexual, romantic, or other forms of attraction and intent to act on said attraction. Lesbians may feel some form of attraction to men (compulsive heterosexuality), but will not seek out relationships with men of their own volition.",
        "identity": "Trans woman, lesbian, 19 years old, white middle-class American",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:41:39.237Z",
        "name": "Vana/Evan/Eden",
        "term": "Genderfluidflux",
        "definition": "Its is where your gender switches between different genders and the intensity of the gender. Like you can feel super masculine or only a little feminine. It could also mean `Non-binary` then switching to very light male. It is different for each person.",
        "identity": "Pansexual Panromantic Genderfluidflux",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:43:09.755Z",
        "term": "Pansexual",
        "definition": "Attraction to people regardless of gender identity or sex.",
        "identity": "Desi, Canadian, middle class, queer feminist.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:43:09.755Z",
        "term": "Panromantic",
        "definition": "Attraction to people regardless of `gender identity` or sex.",
        "identity": "Desi, Canadian, middle class, queer feminist.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:43:56.537Z",
        "term": "Tomcat",
        "definition": "The `bi`/`pansexual` equivalent of a `butch` lesbian. A bi/pansexual woman who dressed in ways that are traditionally masculine.",
        "identity": "Queer",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:44:41.486Z",
        "term": "Chapstick lesbian",
        "definition": "A lesbian who is in between butch and femme.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T05:44:58.160Z",
        "name": "Max",
        "term": "Demiboy",
        "definition": "To me being a demiboy means feeling `nonbinary` and also masculine or as though you are mostly a boy. The term is a grey area and the person who identifies as a demiboy can use whatever pronouns they prefer but most seem to use they/them or he/him.",
        "identity": "Teenage Demiboy",
        "sort-as": ["demiboy", "demi-boy"]
    },
    {
        "time_submitted": "2017-12-27T05:55:10.547Z",
        "name": "Li",
        "term": "Enby",
        "definition": "Shorthand for NB or Nonbinary, a gender identity that isn’t within the binary of male and female. This term is used for those who don’t identify wholly or at all with the gender binary.",
        "identity": " I’m an Asian/White enby who’s fifteen and pan.",
        "sort-as": ["nb", "nonbinary", "enby"]
    },
    {
        "time_submitted": "2017-12-27T06:01:26.733Z",
        "name": "Breeze",
        "term": "Lesbian",
        "definition": "Liking only women and women aligned people",
        "identity": "Latina",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T06:28:31.755Z",
        "name": "Carter",
        "term": "Queer",
        "definition": "Queer to me means that I identify with having a hard to describe and fluctuating sexuality, with attraction to people of all genders.",
        "identity": "Queer man",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T06:34:40.268Z",
        "name": "Quinn",
        "term": "Agender",
        "definition": "The absence of experiencing gender, or experiencing a lack of gender. For some it means experiencing a neutral gender. To me, it means experiencing a lack of gender, or not seeing myself as anything other than a person, rather than a boy, girl, or anything else.",
        "identity": "Agender, white amab person.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T06:53:12.975Z",
        "name": "Nicole Tracii",
        "term": "Pansexual",
        "definition": "Non binary `bisexual`",
        "identity": "Pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T07:25:04.046Z",
        "term": "demi-gender/demi-boy/girl",
        "definition": "To identify primarily outside of the gender binary, or gender as a whole, while only partially retaining identity with femininity or masculinity, perhaps identifying as agender/non-binary while still presenting a certain way",
        "identity": "male",
        "sort-as": ["demi-gender", "demi-boy", "demi-girl", "demiboy", "demigirl", "demigender"]
    },
    {
        "time_submitted": "2017-12-27T07:25:08.264Z",
        "name": "Nicole H.",
        "term": "Non-Binary Bisexual",
        "definition": "It means that I can love either gender.",
        "identity": "An 18 year old black-Irish woman",
        "sort-as": ["non-binary bisexual", "non binary bisexual"]
    },
    {
        "time_submitted": "2017-12-27T07:40:00.324Z",
        "name": "Shane",
        "term": "Twink",
        "definition": "A young `gay` man, often lacking experience in the gay community, who tends to exhibit some or all of the following traits: Cute, effeminate, hairless, flamboyant, artistic/creative, ditzy, unintelligent (or perceived as such), youthful/naïve, and of course, fabulous. Generally aged 17-21.",
        "identity": "White gay boy",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T07:58:57.911Z",
        "name": "Kaylee",
        "term": "Pansexual",
        "definition": "A sexuality that allows you to love anyone despite their gender or to be able to love all genders. For me this means complete freedom to love who I want and to be able to put a word to it.",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T09:24:35.202Z",
        "term": "Pansexual",
        "definition": "Pansexual is attraction to anyone regardless of their `gender identity` or gender expression. Attraction to the whole person, e.g. aesthetic, personality, over their gender. Pansexual is experiencing sexual attraction and `panromantic` is feeling romantic attraction- the two are quite different and should not be interchanged. Pansexual is not the same thing as `bisexual` (attraction to two genders).",
        "identity": "Pansexual Aromantic",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T09:30:07.566Z",
        "name": "Navaha",
        "term": "Pansexual",
        "definition": "Someone who is attracted to all gender identities",
        "identity": "Biracial, Trans-nonbinary, pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T09:33:33.019Z",
        "name": "Navaha",
        "term": "Trans-Non binary",
        "definition": "Trans-non binary: Transgender but not full binary trans (male/female) but still not identifying as full non binary so a mixture of both trans and non binary",
        "identity": "Biracial, Trans-non binary, Pansexual",
        "sort-as": ["trans", "non-binary", "trans non-binary", "trans nonbinary", "trans non binary", "trans enby", "trans nb", "transgender nonbinary", "transgender non-binary"]
    },
    {
        "time_submitted": "2017-12-27T10:25:54.311Z",
        "term": "Bisexual",
        "definition": "Attraction to people of your own gender and genders different from your own.",
        "identity": "Queer",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-27T10:43:02.865Z",
        "term": "Pansexual",
        "definition": "Gender is irrelevant in my attraction to anyone, I could literally fall for anyone",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T10:43:55.627Z",
        "term": "Queer",
        "definition": "A useful umbrella term which used to be a slur",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T10:50:00.157Z",
        "name": "sunshineyoyo",
        "term": "Pansexual",
        "definition": "Is not attracted to any one `gender identity` - likes all. Doesn’t mean that there aren’t some preferences in attraction e.g. I’m more attracted to girls over anything else but I would still be attracted to all",
        "identity": "Pan, disabled gal",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T11:05:42.138Z",
        "name": "Viv",
        "term": "Gay",
        "definition": "Physically and emotionally invested in, and attracted to someone of the same sex.",
        "identity": "Middle/working class 20 year old gay",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T11:14:37.050Z",
        "term": "Lesbian",
        "definition": "It means that women are beautiful and i'm weak so i love them more than anything",
        "identity": "She/her ; living in France",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T11:15:40.368Z",
        "term": "Bi",
        "definition": "Means that they can fall in love and be attracted by both women and men equally or not",
        "sort-as": ["bi", "bisexual", "biromantic", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-27T11:17:09.216Z",
        "term": "Pansexual",
        "definition": "Person that love people of all genders (not just male and female)",
        "sort-as": ["pan","pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T11:30:04.657Z",
        "name": "Laura",
        "term": "Pansexual",
        "definition": "Thats when you dont care about the gender at all, all what matters to you is the personality and the feelings you get about the person. the difference to bisexuality is: the weight is really hard on the personality and not on the gender. so if somebody ask what is pan the answer they get is: i fall in love with the character/personality/human compaired to when the ask what is bisexuality they get the answer: when you like both, femal and male.",
        "identity": "Pansexual 20 years old italian living in switzerland",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T11:55:24.973Z",
        "term": "Pansexuality",
        "definition": "It means you can be sexually attracted to a person of any/none gender.",
        "identity": "Sami, swedish, 22 years old, polyamourus, pansexual, panromantic, demisexual, gender cuestioning.",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T13:50:08.639Z",
        "name": "Ary Ruth",
        "term": "Afab/amab",
        "definition": "Afab- assigned female at birth\nAmab- assigned male at birth\nThese phrases are usually used with people who do not `cisgender` aka: `non-binary`, `trans`, graygender,\n`agender`, ect.",
        "identity": "Afab nonbinary gay",
        "sort-as": ["afab", "amab", "afab/amab", "amab/afab", "a(f/m)ab"]
    },
    {
        "time_submitted": "2017-12-27T16:39:57.214Z",
        "term": "lesbian",
        "definition": "a woman that is sexually and romantically attracted to women only",
        "identity": "white 19 yo european female from an upper middle class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T16:47:08.524Z",
        "name": "Oli",
        "term": "Nonbinary masculine",
        "definition": "A `nonbinary` person who most identifys as male but doesn't genital dysphoria. I have horrible `dysphoria` with my voice, height, muscle mass (more lack of) and breasts",
        "identity": "A biracial, middle lower class, queer male who sadly enough has to live in the USA",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T16:47:09.505Z",
        "term": "Queer",
        "definition": "Queer is a word the `LGBT` community has reclaimed. It can be used as an umbrella term for the LGBT community, however, some people do not identify with this word because of its historically negative connotations. \nSome LGBT people such as myself exclusively identify with the label queer, I use it because I am attracted to all genders but with an emphasis on my own gender. ",
        "identity": "Queer",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T17:36:34.575Z",
        "term": "Asexual",
        "definition": "A person who does not experience sexual attraction",
        "identity": "late 20s, white, middle class, asexual, cis-woman, PNW",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-27T17:37:59.081Z",
        "term": "Ace",
        "definition": "Abbreviation for Asexual: A person who does not experience sexual attraction",
        "identity": "Late 20s, white, middle-class, asexual, cis-woman, PNW",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-27T19:50:43.273Z",
        "term": "Pansexuality",
        "definition": "Pansexuality is to me loving someone no matter their gender, expression, ... Seeing the person before their part",
        "identity": "Canadian teenager",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T20:47:03.495Z",
        "name": "Alaina Tocci",
        "term": "Butch",
        "definition": "1) Masculine gender presentation irrespective of sex\n2) A lesbian with masculine presentation and/or possesses transmasculine qualities\n4) A woman who is the provider of pleasure in a sexual lesbian relationship (See essay on Butch-Fem roles in 1940-70's Buffalo NY published in Hidden From History: Reclaiming the Gay and Lesbian Past)",
        "identity": "College educated white 23 year old butch lesbian of upper middle class in New Hampshire",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:06:00.129Z",
        "name": "Lucas",
        "term": "Queer",
        "definition": "\n\nQueer, in its modern sense, can be used to identify anyone in the LGBTQIA+ community. It’s literal definition is equivalent to \"weird\" or \"strange\" but in its evolution it became an insult and was later reclaimed by the people it targeted. Because of this, it’s meaning can change from person to person, and (a least in my personal view) should only be used if the person referred to identifies as queer (apposed to reffering anyone in the LGBTQIA+ community as queer as a default).",
        "identity": "I identify as a pansexual trans guy",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:43:38.351Z",
        "term": "Lesbian",
        "definition": "A woman exclusively attracted to other women.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:44:08.490Z",
        "term": "Gynesexual",
        "definition": "A `nonbinary` person exclusively attracted to women",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:44:38.802Z",
        "term": "Androsexual",
        "definition": "A `nonbinary` person exclusively attracted to men",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:45:07.396Z",
        "term": "Gay",
        "definition": "A man exclusively attracted to other men",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:45:32.999Z",
        "term": "Polysexual",
        "definition": "Attracted to some but not necessarily all genders",
        "sort-as": ["poly", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2017-12-27T21:46:12.098Z",
        "term": "Bisexual",
        "definition": "Attracted to more than one gender",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-27T21:46:49.733Z",
        "term": "Pansexual",
        "definition": "Attracted to people regardless of gender",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-27T21:47:16.030Z",
        "term": "Transgender",
        "definition": "To identify as something other than your birth sex.",
        "sort-as": ["transgender", "trans", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2017-12-27T21:47:42.945Z",
        "term": "Transsexual",
        "definition": "A `transgender` person who has fully transitioned",
        "sort-as": ["transsexual", "transexual"]
    },
    {
        "time_submitted": "2017-12-27T21:48:28.076Z",
        "term": "Nonbinary",
        "definition": "A person who identifies as something other than exclusively male or female",
        "sort-as": ["nonbinary", "nb", "enby", "non-binary"]
    },
    {
        "time_submitted": "2017-12-27T21:49:46.910Z",
        "term": "Genderqueer",
        "definition": "An offensive and outdated word for `nonbinary`, that also encompasses `gender nonconforming` `cis` people. The creator of its' pride flag supports girlf*gs and guyd*kes, which are both straight people who fetishize same sex relationships.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:50:46.334Z",
        "term": "Androgyne",
        "definition": "A word used to describe a person who presents androgynously, though some believe it to be it's own gender, the word technically only relates to presentation.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:51:28.130Z",
        "term": "Neutrois",
        "definition": "To be gender neutral. Anyone who uses neutral pronouns falls under this category, including `gender nonconforming` `cis` person.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:51:51.155Z",
        "term": "Agender",
        "definition": "To be genderless/sexless",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:52:15.916Z",
        "term": "Bigender",
        "definition": "Someone who identifies as both male and female at once",
        "sort-as": ["bi", "bigender"]
    },
    {
        "time_submitted": "2017-12-27T21:53:13.657Z",
        "term": "Demiman",
        "definition": "A person who identifies partially but not fully as male. Often used by female-at-birth `trans` people who have no desire for bottom surgery.",
        "sort-as": ["demi", "demiman", "demi-man"]
    },
    {
        "time_submitted": "2017-12-27T21:54:10.194Z",
        "term": "Demiwoman",
        "definition": "A person who identifies partially but not fully as female. Often used by male-at-birth trans people with no desire for bottom surgery.",
        "sort-as": ["demi", "demiwoman", "demi-woman"]
    },
    {
        "time_submitted": "2017-12-27T21:54:26.989Z",
        "term": "Genderfluid",
        "definition": "A person whose gender fluctuates",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:55:40.055Z",
        "term": "Asexual",
        "definition": "A person who is not attracted to anyone of any sex/gender. May or may not be specific to sexual attraction, depending on whether or not the person uses the split attraction module.",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-27T21:57:22.894Z",
        "term": "Sapphic",
        "definition": "A woman attracted to other women. May or may not be exclusive. Created to unite `lesbian`s and `bi` women alike.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T21:58:00.346Z",
        "term": "Achillean",
        "definition": "A man attracted to other men. May or may not be exclusive. Invented to unite gay and `bi` men alike.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T22:00:55.369Z",
        "term": "Hermaphrodite",
        "definition": "A word used to describe species of animals with both sets of reproductive organs. Has a history or being used as a slur against `intersex` people, however some choose to use it in order to accurately describe their `dysphoria`.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T22:02:03.728Z",
        "term": "Gender Dysphoria",
        "definition": "The feeling of being trapped in one’s body, or that one should have different body parts. Often thought of as the thing that makes `trans` people trans.",
        "sort-as": ["dysphoria", "gender dysphoria", "dysphoric", "gender dysphoric"]
    },
    {
        "time_submitted": "2017-12-27T22:03:58.407Z",
        "term": "Social Dysphoria",
        "definition": "A feeling of discomfort when being referred to as one's birth sex. Often used as an indicator towards weather or not someone is `trans`, as physical dysphoria can be extremely hard to recognize, however, it can also be experience by `cis` people who dislike or are uncomfortable with gender roles.",
        "sort-as": ["dysphoria", "social dysphoria", "dysphoric", "social dysphoric"]
    },
    {
        "time_submitted": "2017-12-27T22:05:13.645Z",
        "term": "Gender Euphoria",
        "definition": "A euphoric or happy feeling felt by one when referred to as their \"true\" gender. Often used as an indicator towards being `trans`, as physical `gender dysphoria` can be extremely hard to recognize.",
        "sort-as": ["gender euphoria"]
    },
    {
        "time_submitted": "2017-12-27T22:07:08.804Z",
        "term": "Sex",
        "definition": "Some consider this to be defined by chromosomes or body parts, although scientifically, it is defined by one's reproductive organs, hence why male seahorses are the ones that get pregnant. Some consider it to be a mix of the 3 factors, and when one does not perfectly fit into all 3, they are labeled \"intersex\".",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T22:09:11.871Z",
        "term": "Queer",
        "definition": "Considered to be reclaimed, however it still makes many `Lesbian`, `Gay`, `Bi`, `Trans`, Questioning, Intersex, and `Asexual` people uncomfortable, and should be used with caution, only when referring to oneself. Never refer to the entire community as the queer community.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T22:13:54.407Z",
        "term": "Gender",
        "definition": "Originates with grammar. Specifically the gendered pronouns \"he\" and \"she\". When you ask someone's gender, you are technically asking their preferred pronouns. However, in the 1950s, sexologist John Money looked up the definition, say that it was \"the mannerism in which one refers to oneself\"  and concluded that it had to do with one's role in society. This rhetoric quickly spread around in the feminist community, and to this day, many people still believe sex and gender to be entirely different, and choose to define their gender using presentation and gender roles. However, some cultures truly do define it as one's role is society. These are known as culture-specific genders.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T22:14:24.142Z",
        "term": "Sexual Orientation",
        "definition": "The gender(s) one is attracted to.",
        "sort-as": ["orientation", "sexual orientation"]
    },
    {
        "time_submitted": "2017-12-27T22:15:35.322Z",
        "term": "Cisgender",
        "definition": "A person who is not `transgender`",
        "sort-as": ["cis", "cisgender", "cisgendered", "cis-gender", "cis gendered"]
    },
    {
        "time_submitted": "2017-12-27T23:26:53.192Z",
        "name": "Adrian",
        "term": "Queer",
        "definition": "I see it as anything out of the ordinary boxes that people think of. So really anything not heterosexual or `cis`.",
        "identity": "I'm genderfluid/agender, 16 and i grew up in seattle Washington",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T23:32:05.630Z",
        "term": "Bisexual",
        "definition": "Being attracted to two or more genders",
        "identity": "White, Ireland, 21, Non binary, working class",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-27T23:34:36.241Z",
        "name": "Michaela P.C.",
        "term": "Gender Identity",
        "definition": "One’s internal sense of being male, female, both, neither, and/or something else based on social & cultural definitions of different genders",
        "identity": "Multiracial , from SoCal, 16, nonbinary (also genderqueer), queer attraction, middle class",
        "sort-as": ["gender", "gender identity"]
    },
    {
        "time_submitted": "2017-12-27T23:39:01.495Z",
        "name": "Daniel",
        "term": "Fag",
        "definition": "This word is one of the worst words ever in my opinion. It comes from the age where you would burn witches and anyone `LGBT+` but the LGBT+ weren't \"important enough\" to waste the logs on so they got burned with the fags",
        "identity": "Pansexual",
        "sort-as": ["faggot", "fag"]
    },
    {
        "time_submitted": "2017-12-27T23:39:05.818Z",
        "name": "Michaela PC (further credited as MPC)",
        "term": "Nonbinary",
        "definition": "A broadly-encompassing `gender identity`, which means that one isn’t exclusively male or female. Examples of nonbinary genders include `agender`, Two-Spirit, `demigirl`, and simply nonbinary",
        "identity": "Multiracial , from SoCal, 16, nonbinary (also genderqueer), queer attraction, middle class",
        "sort-as": ["non-binary", "nb", "enby", "nonbinary"]
    },
    {
        "time_submitted": "2017-12-27T23:40:15.560Z",
        "name": "Kaz W.",
        "term": "Agender",
        "definition": "The identification of not aligning with either binary gender, not having a gender at all. People who identify as agender may also identify as `trans` agender, solarian/lunarian/`stellarian` agender, or other galaxian terms. (Note, this is an incomplete definition. Please modify if you feel able to, or add to another definition.)",
        "identity": "Caucasian, teenager, agender, lower middle class, USA.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T23:44:10.019Z",
        "name": "MPC",
        "term": "Romantic Orientation",
        "definition": "The presence (or lack thereof) of romantic attraction towards certain people, as opposed to sexual attraction. Examples include heteroromantic (attraction to those of the opposite gender), `biromantic` (to those of 2+ different genders), `aromantic` (to no one regardless of gender), skolioromantic (to nb/gq people), et cetera\n\n\nSide note - if there’s a difference between genderqueer and nonbinary, I’d like to hear it :) I’m confused about that",
        "identity": "Multiracial , from SoCal, 16, nonbinary (also genderqueer), queer attraction, middle class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T23:48:07.251Z",
        "term": "Agender",
        "definition": "A lack of connection between any particular gender. Feeling more yourself than something other people also are.",
        "identity": "Agender, Australia",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T23:49:38.047Z",
        "name": "MPC",
        "term": "Sex Assigned At Birth (SAAB)",
        "definition": "The designation made at birth of either male, female, or something else, based on physical anatomy at the time and/or karyotyping. This is separate from one’s gender identity, which is formed in terms of social/cultural definitions of different genders.\n\nAnother side note - Transstudent.org/definitions has a lot of great definitions! It’s my favorite I’ve found thus far",
        "identity": "Multiracial , from SoCal, 16, nonbinary (also genderqueer), queer attraction, middle class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-27T23:52:50.688Z",
        "term": "Pansexuality / Panromantic",
        "definition": "An potential to be attracted (whether sexually  or romantically) to people of any gender.  This does not meet an attraction to everyone, it means that the people you find attractive do not have to be male, female, or other.",
        "identity": "Agender, pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality", "panromantic"]
    },
    {
        "time_submitted": "2017-12-28T00:24:12.794Z",
        "name": "Evren",
        "term": "Agender",
        "definition": "Agender- without a gender, genderless.\nSex and gender are two different things, they can cooperate, but they dont have to. \n\nThe way I can beat explain it is if you imagine your self image, picture your innerself.\nIf you are a boy great! \nA girl wonderful! \nBoth? Beautiful. \nNone of the above perfect.",
        "identity": "White, american, 21, agender, lower class.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T01:00:58.948Z",
        "term": "Lesbian",
        "definition": "A feminine aligned person who is attracted to women",
        "identity": "white, Pennsylvania, Imma lady",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T01:10:01.592Z",
        "name": "Zayn",
        "term": "Queer",
        "definition": "A term that feels right when nothing else does",
        "identity": "Asian, Minnesota, 22, queer and fluid, lower middle class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T01:49:52.904Z",
        "term": "wlw",
        "definition": "a girl who has a romantic and sexual attraction to girls",
        "identity": "white 16 year old middle class lesbian",
        "sort-as": ["wlw", "woman-loving-woman", "woman loving woman"]
    },
    {
        "time_submitted": "2017-12-28T02:06:34.893Z",
        "name": "bex",
        "term": "agender",
        "definition": "people who lack belief in theism (or a single god) are called atheists; however, people who lack belief in bigfoot are not a-bigfoot-ists, they're just normal people. agender people are normal people without any gender. It's the default when it comes to gender",
        "identity": "agender, all over, 21, white, middle class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T02:52:59.350Z",
        "term": "Ren, Renny, and Rara",
        "definition": "All of these are `nonbinary` terms for a parent! Mom/Dad = Ren, mommy/daddy = renny, Papa/Mama = Rara",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T04:38:32.523Z",
        "name": "Agender Al",
        "term": "Hijra",
        "definition": "`Trans` women/trans feminine people from the Indian-subcontinent. There is a lot of history & culture behind them, that was denied due to British & Christian colonialism. Hijras are once again recognized as a third gender in India & slowly gaining recognition again. While in India & Bangladesh they still face battle for legal recognition.",
        "identity": "Agender/trans woman-ish",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T04:49:52.210Z",
        "name": "Hayden",
        "term": "Polysexual",
        "definition": "Being attracted to some genders but not all. So someone could be attracted to women and `nonbinary` people but not men. Someone else could only be attracted to `genderfluid` individuals, women, and `trans` men.",
        "identity": "16, genderfluid",
        "sort-as": ["poly", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2017-12-28T04:51:48.461Z",
        "name": "Elio",
        "term": "Queer",
        "definition": "Being anything other than heterosexual and/or `cisgender`",
        "identity": "17, genderfluid/genderqueer, polysexual",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T04:53:31.605Z",
        "term": "Gendervoid",
        "definition": "Lacking gender.",
        "identity": "NB",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T04:55:33.377Z",
        "name": "Julianna",
        "term": "Bisexual",
        "definition": "Being bisexual is being attracted (sexually, romantically, or any other way) to 2+ genders. Traditionally, it only meant men and women. However, `nonbinary` genders are included. Some bi people only feel attracted to women and nonbinary people or vice versa. It does not mean that you automatically like threesomes or that you will one day \"decide\" on a gender.",
        "identity": "18 cis girl",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-28T04:59:55.850Z",
        "term": "Homoflexible",
        "definition": "You are basically a `homosexual` but if a special person of the oppositesex were to come along then you could make an exception",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T05:06:20.640Z",
        "name": "Brianna Wray",
        "term": "Bisexual",
        "definition": "It means you are attracted to two genders, typically male and female, with it being ok to have a preference to either.",
        "identity": "I’m a white, lower middle class, demigirl, who is bisexual.",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-28T05:18:25.052Z",
        "term": "Queer",
        "definition": "Our history with the word queer is very complicated, and I believe that is what leaves us with two definitions. For some, queer is a reminder of how far our community has come, and how much we have endured. It labels us as proudly different; it demonstrates that we have a different flavor and a different rhythm than our non-queer counterparts. However, there are those of us who reject the term and who see it as a reminder of the hate and ignorance that surround us still. (I will never forget the first time I heard my uncle reminisce about playing \"smear the queer\" in grade school). I, however, find myself on the fence about the term. Like sanction, which has two oposite meanings, I believe that both have their place. I love the vagueness of queer; it lets me tell others that I am a part of the `LGBT` umbrella without having to chose a more specific term. But I would never use the word to refer to the community as a whole, nor would I use it to refer to anyone without first knowing how they feel about it.",
        "identity": "Hispanic, cis, lesbian, lower middle class, well educated, American.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T05:27:46.808Z",
        "name": "Michael",
        "term": "Nonbinary",
        "definition": "An umbrella term including multiple undefined genders including `agender` and `gender fluid`",
        "identity": "Demigender",
        "sort-as": ["nb", "nonbinary", "enby", "non-binary"]
    },
    {
        "time_submitted": "2017-12-28T05:31:39.251Z",
        "name": "Michael",
        "term": "Demisexual/demiromantic",
        "definition": "Only feeling sexual/romantic attraction when you know someone very well",
        "identity": "Demigender",
        "sort-as": ["demisexual", "demiromantic", "demi", "demi-sexual", "demi-romantic"]
    },
    {
        "time_submitted": "2017-12-28T05:31:41.359Z",
        "name": "Roe",
        "term": "Queer",
        "definition": "Kind of an all-encompassing term that includes both my `gender` and `sexuality` as constantly boundless, fluid things, capable of growth and existing outside of a binary",
        "identity": "Black, nonbinary, bisexual, twenty-something, working class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T05:43:58.243Z",
        "term": "Lesbian",
        "definition": "A female-aligned person who is attracted to other female-aligned people",
        "identity": "Lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T06:27:40.385Z",
        "term": "Queer",
        "definition": "anything out of the `cis`/straight binary regarding gender or sexuality, can be used generally by people within the `lgbt` community who feel comfortable with the word",
        "identity": "I am a queer mexican cis woman who comes from a low income background",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T07:28:24.882Z",
        "name": "Bella",
        "term": "Lesbian",
        "definition": "A woman who loves women",
        "identity": "Gay",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T07:39:26.979Z",
        "name": "Drys",
        "term": "Quoi-sexual/romantic/gender",
        "definition": "To me, it means I do not understand these conceits and therefore cannot definitively say if I experience them in any meaningful capacity. Hence, they are nonsensical as applied to me.",
        "identity": "Mentally ill, quoi(all 3), middle class, white, australian",
        "sort-as": ["quoisexual", "quoiromantic", "quoigender"]
    },
    {
        "time_submitted": "2017-12-28T08:44:24.481Z",
        "name": "Josie",
        "term": "Bisexual",
        "definition": "Attraction to 2 (or more depending on the person using this label) genders.",
        "identity": "Bisexual",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-28T08:46:05.503Z",
        "name": "Josie",
        "term": "Queer",
        "definition": "An umbrella term for anyone in the `LGBT+` community to simply state that they are in the LGBT+ community.",
        "identity": "Bisexual",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T08:46:27.003Z",
        "term": "Asexual",
        "definition": "Someone who doesn't experience sexual attraction. Whether or not someone is asexual doesn't affect whether or not they enjoy the act of sex itself; though there is a higher number of outwardly sex repulsed aces, that is likely due to the community being accepting of a lack of sex",
        "identity": "Asexual, white, disabled, queer, middle class, neurodivergent, British, early twenties",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-28T09:19:57.764Z",
        "term": "Nonbinary",
        "definition": "A `gender identity` that is not 100% always male or female",
        "identity": "Nonbinary, white, teen",
        "sort-as": ["nb", "nonbinary", "enby", "non-binary"]
    },
    {
        "time_submitted": "2017-12-28T09:21:39.633Z",
        "name": "Cecil",
        "term": "Demigender",
        "definition": "Someone who identifies as demigender (demiboy, demigirl, etc.) may feel that while they are closer to a certain gender, they do not entirely align with that identity. For example, a demigirl might experience femininity without being entirely binary.",
        "identity": "transmasculine, heterosexual, panromantic",
        "sort-as": ["demi", "demigender", "demi-gender"]
    },
    {
        "time_submitted": "2017-12-28T12:55:00.225Z",
        "name": "Rena",
        "term": "Pansexual",
        "definition": "The ability to be sexually attracted to anyone, where `gender` is not the main influence or does not influence the attraction",
        "identity": "Pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-28T12:57:17.741Z",
        "name": "Rena",
        "term": "Queer",
        "definition": "An umbrella term that can be used to describe anyone in the `LGBTQ+` community. Useful when your identity is an uncommon one and you don’t feel like constantly having to explain what your identity means.",
        "identity": "Pansexual cis woman.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T16:22:45.579Z",
        "name": "Grace Calcagno",
        "term": "Bisexual",
        "definition": "The sexual attraction to two genders (typically male and female), bisexual means (to me) just a label of my sexual appeal that IS VALID and definitely not fake, a phase, the step before being gay, greedy, or means you're always down for a threesome.",
        "identity": "bisexual female",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-28T16:25:31.600Z",
        "name": "Emma",
        "term": "Asexual",
        "definition": "Experiencing no sexual attraction towards person's of any `gender`. This term does not dictate how a person feels about having sex, if they ever want to, how active their libido is, whether or not they want romantic relationship, or a person's `romantic orientation`. As an umbrella term, any person who identifies as asexual or on the asexual spectrum",
        "identity": "Asexual, agender, demiromantic",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-28T16:28:35.707Z",
        "name": "Emma",
        "term": "Aceflux",
        "definition": "When a person's sexuality fluctuates between either `asexual` and zedsexual (experiencing sexual attraction) or between two or more orientation that are all on the asexual spectrum",
        "identity": "Asexual, agender, demiromantic",
        "sort-as": ["ace", "aceflux"]
    },
    {
        "time_submitted": "2017-12-28T16:32:13.788Z",
        "name": "Emma",
        "term": "Amatanormativity",
        "definition": "The idea that a person's \"end goal\" in life is to be married or have a partner; that a single, monogamous,  exclusive relationship between two persons is what everyone wants and that the absence of such a relationship is strange or that persons without such a relationship can never truly be happy.",
        "identity": "Asexual, agender, demiromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T20:26:53.325Z",
        "term": "Lesbian",
        "definition": "A person (normally a woman but also someone who is `non-binary` or woman aligned non-binary) who loves other women",
        "identity": "Non-binary Lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T21:07:10.154Z",
        "name": "Harvey",
        "term": "Bisexual",
        "definition": "A person attracted to people irrelevant of their sex",
        "identity": "Colonially descended Canadian, bisexual transman, working class from an upper-middle class family",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-28T21:09:03.661Z",
        "name": "Harvey",
        "term": "Transman",
        "definition": "A dfab person who identifies with a male social role, and typically pursues elements of physical transition to more consistently be understood in that role",
        "identity": "Colonially descended white Canadian, bisexual transman, working class with a middle-aged class family background",
        "sort-as": ["transman", "trans", "trans man", "trans-man", "trans* man", "transmen", "transgender", "transgender men", "trans men"]
    },
    {
        "time_submitted": "2017-12-28T22:03:25.495Z",
        "term": "Nonbinary trans",
        "definition": "It means that my gender expression is `non binary` but my gender is trans (I have body `dysphoria`, not `social dysphoria` which is when you feel anxious about what gender people will see you as)",
        "identity": "German Swedish bi nb trans guy",
        "sort-as": ["nonbinary trans", "non binary trans", "non-binary trans", "non-binary transgender", "non binary transgender", "nonbinary transgender"]
    },
    {
        "time_submitted": "2017-12-28T22:38:21.240Z",
        "term": "Panromantic",
        "definition": "Feeling or being able to feel romantic attraction to anyone regardless of `gender`",
        "identity": "17, Virginia USA, cis girl, panromantic demisexual, middle class, white,",
        "sort-as": ["pan", "panromantic"]
    },
    {
        "time_submitted": "2017-12-28T23:47:14.279Z",
        "name": "Rose",
        "term": "Lesbian",
        "definition": "A women who is exclusively attracted to other women or woman-aligned individuals, including `nonbinary` women such as `demigirl`s, and `trans` women.",
        "identity": "25 year old disabled nonbinary lesbian from Canada",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T23:50:30.500Z",
        "term": "queer",
        "definition": "a slur that shouldn't be used as an umbrella term nor applied to any `lgbt` person without their express permission 👀",
        "identity": "tired lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T23:53:02.204Z",
        "term": "Lesbian",
        "definition": "Exclusive attraction to women and women aligned people (not attracted to male or male aligned people)",
        "identity": "Lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-28T23:55:20.621Z",
        "term": "Bisexual",
        "definition": "Being attracted to your gender and others\n",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-28T23:56:18.109Z",
        "name": "morgan",
        "term": "lgbt+",
        "definition": "not cisgender or heterosexual",
        "identity": "white, georgia (US), 14, lesbian",
        "sort-as": ["lgbt", "lgbtq", "lgbt+", "lgbtq+"]
    },
    {
        "time_submitted": "2017-12-29T00:02:49.603Z",
        "term": "Bisexual",
        "definition": "To me it means that i can feel attraction towards diffrent genders, but i.e. my attraction towards men is very different than my attraction towards women, and that's why i don't use the label '`pansexual`', because i don't feel attraction regardless of gender.",
        "identity": "Bisexual, questioning",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-29T00:03:47.109Z",
        "name": "Rachel/Robyn",
        "term": "demigirl",
        "definition": "demigirl: an identity leaning more towards feminine, but not quite identifying as a female. This can mean someone `afab` who feels a disconnect from their gender, but still feels more feminine than `nonbinary` or masculine,  or someone `amab` who is transfeminine but not wholly binary, who feels more feminine than masculine or nonbinary, but not enough to identify fully as female. Basically \"I'm a girl, but not really\". A demigirl will probably use she/her pronouns or they/them. Demigirl can be an in between space between a feminine and nonbinary identity",
        "identity": "I'm a demigirl and a lesbian, currently questioning other nonbinary identities.",
        "sort-as": ["demigirl", "demi", "demi-girl"]
    },
    {
        "time_submitted": "2017-12-29T00:15:15.102Z",
        "name": "Val",
        "term": "Gay",
        "definition": "Gay is used primarily to describe a man attracted to other men but can be used as an umbrella term for many other sexualities so long they have same-sex attraction.",
        "identity": "I'm a 15 year old biracial (black/white) nb lesbian residing in Florida. I'm currently upper middle class, to the point where I think we're middle class, but I am definitely aware my household has more money but not wealthy.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T00:16:29.456Z",
        "name": "Grace Moon",
        "term": "Queer",
        "definition": "A queer person is someone who defies the \"norm\" someone who may be outcasted or shunned due to some defining trait (especially with regards to sexuality). However this \"queerness\" is a strength, a power: breaking the mold and owning your true self is the bravest and most beautiful trait",
        "identity": "Cis female, lesbian, white, 18 y/o",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T00:18:57.075Z",
        "name": "Quinn",
        "term": "sapphic",
        "definition": "a feminine aligned person attracted to other feminine aligned persons",
        "identity": "I'm an 18 year old non binary lesbian from the united states.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T01:32:29.475Z",
        "name": "Cheyenne Carr",
        "term": "Polysexual",
        "definition": "Polysexual is when a person is attracted to 3 or more genders, but not all of them. It can be any combination (Example: `cis` men, cis women, `non-binary`) of any genders as long as they are three or more and exclude at least one gender. This is a term that is often compared to `pansexual` and `bisexual`.",
        "identity": "I am a white, cis, panromantic, polysexual woman",
        "sort-as": ["poly", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2017-12-29T01:47:12.645Z",
        "name": "Charlie",
        "term": "Bi",
        "definition": "Short for bisexual or biromantic, not necessarily a binary term. Denotes attraction to multiple genders. Similar meaning to `pansexual` or `panromantic`, the choice to use either bi or pan as a self-description is usually just personal preference.",
        "identity": "Queer Canadian college student",
        "sort-as": ["bi", "bisexual", "bisexuality", "biromantic"]
    },
    {
        "time_submitted": "2017-12-29T01:54:44.992Z",
        "term": "Queer",
        "definition": "A historical term that originated as a self descriptor and umbrella term for members of the LGBTQ2+ community. Has been used to have a negative connotation by straight/`cisgender` people in the same way \"gay\" is often used as a derogatory term. Someone may \ncall themself queer if their gender doesn't fit the one assigned to them at birth and/or if the way that they experience attraction isn't strictly heterosexual and heteroromantic.\nSome LGBT people are not comfortable with the term being applied to them because others have used it as a slur.",
        "identity": "Queer (trans, biromantic, gay) Canadian college student",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T02:00:48.537Z",
        "term": "Bisexual",
        "definition": "The attraction to same and other genders",
        "identity": "Biracial, latinx, middle class, 21",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-29T02:21:03.352Z",
        "name": "Liv",
        "term": "Butch",
        "definition": "A `lesbian` who rejects traditionally feminine presentations and attitudes. Different from `gender non-conforming`, as butches are defined in a major way by their love for women along with their rejection of traditional femininity.",
        "identity": "Butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T02:43:24.924Z",
        "term": "wlw",
        "definition": "woman-loving-woman: a women or woman-aligned nb person who experiences attraction to other women or woman-alighned nb people. can also experience attraction to other genders (some wlw identities: lesbian, bisexual, pansexual, etc.)(wlw and sapphic mean pretty much the same thing)",
        "sort-as": ["wlw", "woman-loving-woman", "woman loving woman", "women loving woman", "women loving women"]
    },
    {
        "time_submitted": "2017-12-29T03:09:49.804Z",
        "term": "Bisexual",
        "definition": "Attraction to two or more genders",
        "identity": "White female, 21 years old, Australian",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-29T03:15:02.225Z",
        "term": "asexual",
        "definition": "Not experiencing sexual attraction towards any individual; does not necessarily mean that an asexual person doesn't want to have sex or is repulsed by sex",
        "identity": "Middle-class Caucasian female teenager",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-29T05:22:20.933Z",
        "term": "Biromantic",
        "definition": "Romantic attraction to two or more genders",
        "identity": "17, asexual, questioning for romantic orientation",
        "sort-as": ["bi", "biromantic"]
    },
    {
        "time_submitted": "2017-12-29T06:42:24.769Z",
        "term": "Bisexuality",
        "definition": "Attraction to two or more genders",
        "identity": "Bisexual",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-29T06:45:50.546Z",
        "term": "Queer",
        "definition": "an umbrella term that can be used to describe `lgbt+` identities (`gay`, `bi`, `trans`, `ace`, `pan`, etc.)",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T07:41:53.736Z",
        "name": "El",
        "term": "Demiromantic",
        "definition": "To have an emotional attraction to somebody before a romantic attraction. To me, this means developing a deeper connection to the person, getting to know them better.",
        "identity": "Demiromantic, lesbian",
        "sort-as": ["demi", "demiromantic", "demi-romantic"]
    },
    {
        "time_submitted": "2017-12-29T08:27:41.140Z",
        "term": "Sapphic",
        "definition": "The romantic attraction of one woman to another.",
        "identity": "Sapphic, queer, gay",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T16:26:23.998Z",
        "name": "Miranda Chen",
        "term": "heteroflexible",
        "definition": "primarily straight, but open to and capable of dating the same gender in certain situations (too straight to be `bisexual`, to bisexual to be straight)",
        "identity": "cisgender girl",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T17:41:42.045Z",
        "name": "Seamus Turner",
        "term": "Pansexual/Panromantic",
        "definition": "Gender doesn't play a role in who you are attracted to in the sense that you can be attracted to all genders.",
        "identity": "Cis, white, tucson arizona US, he/him, lower middle class, 17",
        "sort-as": ["pan", "pansexual", "pansexuality", "panromantic"]
    },
    {
        "time_submitted": "2017-12-29T18:30:47.493Z",
        "name": "Casey",
        "term": "Nonbinary",
        "definition": "The term, to me, means a person who identifies outside of normal binary norm. For me it means a form of androgyny where I can be what I want, when I want, and don’t have to say I’m a binary gender or someone who switches. I just exist outside of a binary.",
        "identity": "Caucasian, 16, Nonbinary, Pansexual",
        "sort-as": ["nonbinary", "non-binary", "nb", "enby", "non binary"]
    },
    {
        "time_submitted": "2017-12-29T18:32:37.742Z",
        "name": "Jessie G.",
        "term": "Sapphic",
        "definition": "To be sapphic means to be a woman who is romantically and/or sexually attracted to women.",
        "identity": "21, Bisexual, Demigirl, White, Southern Illinois, Middle Class.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T18:32:51.102Z",
        "name": "Casey",
        "term": "Pansexual",
        "definition": "Pansexual is being attracted to anyone despite their gender / sexual identity. If doesn’t matter who they are in that sense, it matters more that you love them for who they are. It is a love that isn’t defined by gender or sex.",
        "identity": "Caucasian, 16, Nonbinary, Pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-29T18:35:26.445Z",
        "name": "Lucas",
        "term": "Trans",
        "definition": "The gender you identify that isn't your assigned gender at birth (`nonbinary`, trans male/female, `agender`, `demi`, ect.)",
        "identity": "Trans male and nonbinary (he/him, they/them)",
        "sort-as": ["trans", "transgender", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2017-12-29T18:43:43.401Z",
        "name": "Jay",
        "term": "Neptunic",
        "definition": "Attracted to women and `nonbinary` people, but not men and commonly masc-aligned people.",
        "identity": "Neptunic",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T18:55:19.069Z",
        "name": "Alyssa Gent",
        "term": "Genderflux",
        "definition": "Ones gender does not change, but the intensity that they feel their gender does.",
        "identity": "Genderfluid",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T19:04:59.185Z",
        "term": "femme",
        "definition": "A `lesbian` who presents in a femenine way but subverts femininity by not aiming it at attracting boys. Basically a lesbian that dresses feminine but in a way straight men wouldn't generally like/without caring about men's opinion",
        "identity": "white nonbinary lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T19:19:07.043Z",
        "name": "Kai",
        "term": "Gender-fluid",
        "definition": "Gender-fluid to me means that my gender is exactly that. Fluid. One day I feel like a girl the next day a guy and then in the middle of the day I could feel like both or neither. Being gender-fluid doesn’t mean you can change your gender at will. It just happens.",
        "identity": "Gender identity/sexuality- Pansexual/panromantic gender-fluid",
        "sort-as": ["gender-fluid", "genderfluid"]
    },
    {
        "time_submitted": "2017-12-29T19:21:44.612Z",
        "term": "Pansexual",
        "definition": "Being Pan means I want to kiss guys girls, `non-binary` people, `bigender` people and all other genders (if they are attractive of course) I’m not into people’s souls. ",
        "identity": "Gender-fluid/ Pansexual/panromantic",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-29T19:26:03.397Z",
        "name": "Sav",
        "term": "Sapphic",
        "definition": "Sapphic is an identity some choose to use to describe their sexual oritentation. It could also be used as an umbrella term for girls (or feminine aligning people) who are attracted to other girls (and/or feminine aligning people). As this is an umbrella term, multiple different kinds of girls can use this term, like `lesbian`s, `bi` girls, `pan` girls, questioning girls, `ace` girls, and a whole lot of other labels could fall under this description. This is a feminine-specific identity. The term sapphic originates from Sappho, the famous lesbian poet from the island of Lesbos.",
        "identity": "I identify as a white lesbian who's 17 years old, middle class, and fairly privileged.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T19:27:15.778Z",
        "name": "eric",
        "term": "nonbinary",
        "definition": "fuck off gender lol",
        "identity": "nb, 15, texas",
        "sort-as": ["nb", "enby", "nonbinary", "non-binary", "non binary"]
    },
    {
        "time_submitted": "2017-12-29T19:39:58.270Z",
        "name": "Rhys/Leo",
        "term": "Gay",
        "definition": "To me, it means to be attracted and to love someone of the same gender, or to love someone who is masculine. By this I mean, if you are, say, `Trans` male, or `Demiboy`, and you are in a relationship with someone who is `nb` masc... Well, thats still gay.",
        "identity": "Trans Demiboy, i use Gay and Panromantic interchangeably and Demisexual",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T19:47:43.986Z",
        "name": "Maura Means",
        "term": "Stellarian",
        "definition": "a neutral `Nonbinary` gender that comes from a family of terms (solarian, lunarian, and the many combinations there in) that are themed around stars and space based on the many cultural connotations of those elements. (such as the sun being a masculine energy, moon being a feminine energy, and stars having no sway.) https://pride-color-schemes.tumblr.com/post/159849116290/galactian-alignments",
        "identity": "age: 18 , USA, Asexual Aroflux (quiromantic/aromantic/aegoromantic), gender: Stellarian",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-29T19:58:59.079Z",
        "name": "Nick",
        "term": "Pansexual",
        "definition": "Not the attraction to pans. Pansexuality is the attraction to people regardless of gender, although there are some standards some pans may have. For example, some pans look for people with large builds and personalities to boot. Others may look for cute, short nerds. In any case, attraction is independent of gender.",
        "identity": "Demiboy, pan",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2017-12-29T20:07:47.500Z",
        "name": "Seth",
        "term": "Bisexuality",
        "definition": "To me, being bi means the attraction to two or more genders. It's sorta like you want lunch, and there's a burger joint, a taco bell, and a chinese joint. I like burgers, tacos, and orange chicken. Sometimes I'm more in a burger mood, and other times I want taco bell or chinese food. Sometimes, I don't really care; I'm just hungry.",
        "identity": "Bisexual",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-29T20:36:23.121Z",
        "term": "Bisexual",
        "definition": "Attraction to 2 or more genders",
        "identity": "Bisexual",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-29T23:28:51.367Z",
        "term": "Asexual",
        "definition": "A person who doesn't experience sexual attraction",
        "identity": "Asian, female, poor, lesbian, asexual",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2017-12-30T00:45:40.568Z",
        "name": "August Nielsen",
        "term": "Gender dysphoria",
        "definition": "An intense discomfort that can happen off and on or at any time, with your assigned gender at birth. This can be body dysphoria or `social dysphoria`. Body dysphoria can be anything from discomfort with your voice or discomfort with your sexual organs, to give two examples. An example of social dysphoria is simply the discomfort that is caused when someone uses the wrong pronouns for you.",
        "identity": "White. 16. Trans male. Gay.",
        "sort-as": ["dysphoria", "gender dysphoria"]
    },
    {
        "time_submitted": "2017-12-30T03:04:07.558Z",
        "name": "Bryby",
        "term": "Fag (faggot)",
        "definition": "A loosely used term, usually for someone that is \"acting gay\" or is generally disliked. When used to describe an `lgbtq+` person, usually is meant to make them feel devalued, unimportant, and disliked.",
        "identity": "Caucasian teen female",
        "sort-as": ["fag", "faggot"]
    },
    {
        "time_submitted": "2017-12-30T06:55:49.567Z",
        "term": "Agender",
        "definition": "To me, agender is just being myself and not feeling strictly feminine or masculine at any given time. It is feeling neutral and comfortable in my body.",
        "identity": "16 and agender",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-30T09:05:38.456Z",
        "term": "Gay",
        "definition": "Exclusively `Homosexual` (not simply `queer`). Many people misuse this term as a label for themselves if they are queer but not necessarily homosexual, such as a `bisexual` person. This term has always meant and still means \"homosexual\" but is just a less aggressive way of saying it.",
        "identity": "Bisexual Heteroromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-30T09:31:59.355Z",
        "name": "Georgia",
        "term": "Sapphic",
        "definition": "Women who feel romantically and/or sexually attracted to other women. The name comes from the ancient poet Sappho from Lesbos (c. 630 BC). Sappho wrote about her love for women, and has subsequently become an lgbt icon (hence 'Lesbian' coming from her home island Lesbos). Unlike the labels 'Lesbian' and 'Bisexual' it is a more broad label that simply means you are a woman who likes women.",
        "identity": "Sapphic (sometimes i use the label 'gay' or 'queer'). Caucasian 22 year-old female.",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-30T17:52:17.924Z",
        "name": "Maxwell",
        "term": "Demiboy",
        "definition": "When someone, no matter what their birth gender is, feels partially like a boy, but not fully. They normally feel part boy, and then the other half is normally but not always `nonbinary`. A lot of the time, they actually can't pick out what the other gender part is exactly, and just know its there. I saw this video once, and it was all like\" Make a pizza. Most people think of pizza as pepperoni and cheese, but you instead have a pizza with tomatoes, spinach, and beef. It's still pizza, but it's just not exactly what would come to mind first thing you think of pizza. Its just like demiboy. I'm not what you'd think of as a boy, but I'm still a boy... just a different kind of boy\".  ",
        "identity": "I'm a teen Demiboy (FAB), genderqueer NB, Pansexual Demisexual",
        "sort-as": ["demiboy", "demi", "demi-boy"]
    },
    {
        "time_submitted": "2017-12-30T19:56:52.755Z",
        "term": "lesbian",
        "definition": "being a lesbian means being a woman or womanhood-identifying person who's romantically & sexually attracted to women (although the sexual attraction part isn't necessary). it means loving women & dedicating your life to them and their (our) liberation in society and finding solace among them about the misoginy + transmisogyny we are bound to experience by men. it means celebrating our victories against a misogynystic and lesbophobic + homophobic society",
        "identity": "white-passing latine nonbinary person + middle class",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-30T20:02:10.811Z",
        "term": "nonbinary",
        "definition": "being a nb person means not identifying and conforming to the binary genders forced onto us by society: woman and man. we aren't and don't allow `cis` and `trans` binary people to label us by solely either of those terms. to me personally, being nb means breaking free of the concept of gender (gender is a social construct that shouldn't exist imo) and allowing yourself to be. just be. nota bene: you don't have to look androgynous to be nb. the way you present yourself doesn't have to be representative of your gender (or lack thereof)",
        "identity": "19yo white-passing latine nonbinary lesbian (middle class) (forgot to add my age and sexuality!)",
        "sort-as": ["nb", "enby", "nonbinary", "non-binary", "non binary"]
    },
    {
        "time_submitted": "2017-12-30T23:51:16.065Z",
        "term": "Bisexual",
        "definition": "The attraction to two or more gender identities.",
        "identity": "Mixed race, indigenous, South Florida, 36 years old, CIS female, poor, Bisexual, physically and mentally disabled.",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2017-12-31T07:05:19.402Z",
        "term": "Twink",
        "definition": "A slender `gay` man who has a slightly athletic build. Not necessarily unintelligent. Often caring and mischevous",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-31T07:06:44.344Z",
        "term": "Nonbinary lesbian",
        "definition": "A `lesbian` who has a tumultous connection to womanhood and chooses to focus on her attraction to women over her gender",
        "identity": "16 y/o middle class white south eastern american nonbinary lesbian",
        "sort-as": ["non-binary lesbian", "nb lesbian", "nonbinary lesbian", "non binary lesbian"]
    },
    {
        "time_submitted": "2017-12-31T07:07:43.203Z",
        "term": "Queer",
        "definition": "Adjective used as a catch all to describe any aspect of the `lgbt` community. Use with caution, its a slur",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-31T07:09:00.561Z",
        "term": "Butch",
        "definition": "A `gender nonconforming` `lesbian` who focuses on a more \"masculine\" physical presentation and centers their identity firmly around their attraction to and protection of fellow `wlw`",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-31T20:19:42.485Z",
        "term": "Queer",
        "definition": "Somewhere under, in between or a mixture, of the rainbow of sexualities. As in you don't explicitly identify as being/with a specific sexuality. \n\nPersonally, I tend to relate with this term, as all I know is that I'm not straight/heterosexual. Hence, I'm content with just knowing that I lie somewhere on the rainbow.",
        "identity": "Age: 18 years old  Race: Black/Mixed  Gender: Female  Socioeconomic status: Struggling middle class  Identity: Queer Person of Colour",
        "sort-as": []
    },
    {
        "time_submitted": "2017-12-31T21:39:46.472Z",
        "name": "Claire",
        "term": "dyke",
        "definition": "a lesbian-specific term that is in reference to a `lesbian` or lesbians in general. used more in reference to `butch` lesbians.",
        "identity": "lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-01T00:20:53.635Z",
        "name": "Adelina",
        "term": "Sapphic",
        "definition": "The word sapphic comes from the name Sappho, a famous `lesbian` ancient Greek poet; it refers to women and `nonbinary` people with a connection to womanhood (not necessarily femininity) who are romantically and/or sexually attracted to other women and nonbinary people with a connection to womanhood. It's an umbrella term that unites lesbian, `bisexual`, `pansexual`, `queer` and many other communities, and provide space for a shared history and experiences despite other differences; unlike `Woman Loving Woman` (WLW), the sapphic label deliberately makes space for nonbinary people (though some nonbinary people use WLW).",
        "identity": "Queer (probably? gay), sapphic, previously identified as bisexual, originally thought I was straight, realized I was queer about 2 years ago, woman, cis, white, teenager, middle-class, perisex, able-bodied, neurotypical, American (born in Romania), Californian, agnostic atheist from secular family with Catholic and Eastern Orthodox roots.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-01T00:53:39.802Z",
        "name": "Adelina",
        "term": "Queer",
        "definition": "Queer was originally a synonym for \"odd\" or \"unusual\"; it's now a label available for anyone who doesn't fit the straight, `cisgender`, allosexual, alloromantic mold society forces upon people and sees as \"normal\" and \"the default\". Queer began to be used as a slur against LGBTAI and `non gender-conforming` people in the late 19th century, and was reclaimed by activists in the 1980's (mostly radicals who wanted an alternative to the mainstream LGBTAI movement, which stressed conformity to the model to gain acceptance and rights). However queer is still often used as a slur, so you shouldn't use it to describe someone who doesn't use the label themselves; the entire LGBTAI community should not be referred to as the queer community.",
        "identity": "Queer (possibly? gay), sapphic, cis woman, WLW, teenager, white, middle-class, American, Californian, Romanian born, perisex, able-bodied, neurotypical, alloromantic, allosexual, agnostic atheist from secular family with Catholic and Eastern Orthodox roots, fat",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-01T05:46:39.247Z",
        "name": "stormysapphic (tumblr url)",
        "term": "sapphic",
        "definition": "Anyone who identifies as (partly) female/(partly) female aligned and is (exclusively or not) attracted to people who identify as female/female aligned. For example a `pansexual` `trans` woman, a female aligned `nonbinary` `lesbian`, and a `genderfluid` (between, say, male and female) `bisexual` person who is attracted to girls and nonbinary people can all identify as sapphic.",
        "identity": "18, nonbinary, sapphic/queer",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-01T16:09:41.288Z",
        "name": "ilona",
        "term": "lesbian / butch",
        "definition": "it means a lot to me, because its the first time im this comfortable with a label. i used to use the split attraction model, but ive come to realise that just held me back in discovering who i truly am. `butch` is a specification, but to me its just as important. i feel like it explains what i stand for and who i am. it makes me feel comfortable in my skin, and it helps me with my confidence.",
        "identity": "white, the netherlands, 15, nonbinary, and i dont know? we arent poor but do need to watch what we spend. i live in with my grandparents who are sort of my foster parents because my mom had problems with addiction.",
        "sort-as": ["lesbian", "butch"]
    },
    {
        "time_submitted": "2018-01-01T20:36:16.635Z",
        "term": "Asexual",
        "definition": "A person who feels little to no sexual attraction. May still feel romantic, platonic and sensual attraction.",
        "identity": "Cis female, asexual, eastern europe",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-01-02T14:35:14.816Z",
        "term": "bisexuality",
        "definition": "attraction to genders similar and different to your own",
        "identity": "genderqueer, biromamtic bisexual, european",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-02T14:41:49.417Z",
        "term": "queer",
        "definition": "not heterosexual/`cisgender`; sometimes used as a slur for not straight people",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-02T16:03:17.514Z",
        "term": "In the life",
        "definition": "A way to identify if someone was `LGBTQ` in a somewhat discreet way.",
        "identity": "Native Hawaiian (ethnically), Queer, male, Native New Yorker",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-02T19:33:21.425Z",
        "name": "Mahnaz",
        "term": "Demisexual",
        "definition": "Demisexuality is on the `asexual` spectrum. It is defined as not feeling sexual attraction, arousal, desire, or getting satisfaction from sex unless there is a deep bond between partners. It can also be used with other labels to identify you e.g. demipansexual, demibisexual, demisexual homoromantic, etc.",
        "identity": "Muslim, woman of color, demisexual panromantic",
        "sort-as": ["demi", "demisexual", "demi-sexual"]
    },
    {
        "time_submitted": "2018-01-02T21:35:15.278Z",
        "name": "Dante B",
        "term": "Bisexuality",
        "definition": "A sexuality where romantic and sexual attraction is experienced towards two or more genders.  (sometimes `Pansexual` seems like a better label)",
        "identity": "White (hispanic), Indiana (hate it but leaving as soon as I can), 21, cis bi male, poor middle class (",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-03T22:17:10.338Z",
        "name": "Robin",
        "term": "Asexual",
        "definition": "Someone who doesn’t experience sexual attraction, but may possibly experience ROMANTIC attraction. If they don’t, that’s called `Aromantic`.",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-01-04T16:21:46.724Z",
        "name": "Bradley Detmers",
        "term": "Polysexual",
        "definition": "It means the attraction to some genders but not all",
        "identity": "I’m a demiboy",
        "sort-as": ["poly", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2018-01-08T00:18:52.100Z",
        "term": "Sapphic",
        "definition": "A person who identifies as female is attracted to other people who identify as female or present themselves as feminine, i.e a girl who likes girls.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-08T06:15:28.536Z",
        "name": "Cecilia",
        "term": "bisexual",
        "definition": "attracted to two or more genders",
        "identity": "18, white, girl, detroit",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-09T05:01:30.642Z",
        "name": "Courtney",
        "term": "Bisexuality",
        "definition": "Bisexuality is the attraction to two or more genders, regardless of relative intensity, frequency, or type",
        "identity": "Bisexual woman",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-10T03:35:26.907Z",
        "term": "femme",
        "definition": "someone who identifies as a girl and presents as more girly or feminine and likes girls too!",
        "identity": "I'm genderfluid and pan and polyamorous also I'm white and in New York City (queens)",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-10T23:48:14.265Z",
        "name": "Gabe",
        "term": "Bisexual",
        "definition": "To be attracted to 2 genders, and have the genders not influence your attractions.",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-12T04:36:32.844Z",
        "name": "Avi",
        "term": "Nonbinary",
        "definition": "A gender that isn't male or female - literally, not binary. For me, it's a neutral feeling. Sort of freeing, almost, like I don't have to conform to the gender binary - because I'm not part of it! Occasionally, I feel a little more masculine or feminine, but I'm mostly not either.",
        "identity": "I'm a bi/ace/trans kid (and proud to be!) coming up on my 16th birthday.",
        "sort-as": ["nb", "enby", "non-binary", "nonbinary", "non binary"]
    },
    {
        "time_submitted": "2018-01-13T08:04:16.952Z",
        "name": "Marie",
        "term": "Gender fluid",
        "definition": "When someone expresses their gender as either both or their gender expression changes from day, mood, etc.",
        "identity": "Genderqueer",
        "sort-as": ["genderfluid", "gender fluid"]
    },
    {
        "time_submitted": "2018-01-14T05:43:13.920Z",
        "term": "Dyke",
        "definition": "A slur for `lesbian`s that some lesbians have reclaimed. I sometimes use it for myself and am okay with close friends using it for me, but I'm not comfortable with it as an umbrella term or non-lesbians using it",
        "identity": "Lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-14T05:47:10.136Z",
        "term": "Butch",
        "definition": "A term used for `lesbian`s who are more masculine or `gender non-conforming`. It has a lot of historical significance and is more than just a term for masculine women or women whose fashion is more masculine. Butch lesbians are still women! We don't have privilege for being butch and do often face discrimination for being lesbians and GNC. Personally, I think it's okay for `bisexual` women who are married to other women or who only partner with other women to also use this term, but I'm super uncomfortable with it being used by anyone who is or might be in a relationship with a man or it being used as a gender identity label.",
        "identity": "Lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-14T06:04:22.739Z",
        "term": "Gender non-conforming (GNC)",
        "definition": "Being GNC means not fitting into the gender roles expected according to one's sex. It's based on more than just style of dress. How you interact with others, present your body, talk, and move, the social roles you play, the skills you learn and cherish, and how you view yourself all play a role. Everyone's GNC to some extent because no one is the prototypical man or woman, but the label is usually used for individuals who are non-conforming enough that others would label them such, who don't feel comfortable with the majority of assumptions made based on their sex, or who make a conscience effort to play around with their gendered presentation. A lot of individuals calling themselves nonbinary are actually GNC. Many gay men, lesbians, and bisexuals are GNC. Straight people can be GNC, but it's not as common. Most GNC children grow up to be gay men or lesbians. Trans individuals are usually considered GNC by default because their presentation doesn't match their sex, and they may also be GNC in that they don't match expectations for the sex that they're transitioning to.",
        "identity": "Lesbian",
        "sort-as": ["gender nonconforming", "gender non-conforming", "non gender-conforming", "gnc"]
    },
    {
        "time_submitted": "2018-01-14T06:14:44.175Z",
        "term": "Trans",
        "definition": "People who have sex `dysphoria` have a neurological condition in which their brain's expectation for what their body should be doesn't match what their body is. Trans individuals choose to try to treat this dysphoria by taking measures to present as the opposite sex and / or medically transition to make their features more closely match what their brain believes their body should be like. Being trans isn't a lifestyle, a fashion, a trend, a mental illness, or something that anyone can choose to be. It has nothing to do with gender in of itself, but many trans individuals also experience dysphoria when they're perceived as a member of their birth sex because of how society connects gender and sex. Even if gender ceased to exist, trans individuals would still have a medical condition for which transitioning is a potential treatment.",
        "identity": "A lesbian who's very tired of being told that I'm trans because I am and always have been GNC and have no connection to womenhood as a concept. I identified as agender for a few years, but I never felt right calling myself trans because I don't deal with sex dysphoria like those who need to medically transition do. That said, I've found that my experiences are very similar to those of (pre-transition) trans men save for my lack of sex dysphoria",
        "sort-as": ["trans", "transgender", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2018-01-17T04:40:49.194Z",
        "term": "Asexual",
        "definition": "lack of sexual attraction",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-01-17T13:19:06.133Z",
        "term": "pansexual",
        "definition": "Being attracted to people regardless of gender",
        "identity": "pansexual, transgender",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-17T13:21:44.754Z",
        "term": "transgender",
        "definition": "not fully identifying with the gender one was assigned at birth",
        "identity": "pansexual trans boy",
        "sort-as": ["trans", "transgender", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2018-01-17T16:57:08.457Z",
        "name": "havana",
        "term": "bisexual",
        "definition": "i liked boys openly for 15 years but then i met a girl and i just couldn't deny my feelings for her. i didn't know what this was and everyone around me tended to shame bisexuals for not being straight or gay enough. whether i end up marrying a girl or a boy, i know that i'm still bisexual because i'm attracted to both. bisexuality isn't \"just experimenting\" or \"just a phase\". it's a person and their journey of love. i've loved boys. i've loved girls. that's just how i am and i'm proud of my sexual orientation.",
        "identity": "catholic teenager",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-20T08:31:11.363Z",
        "name": "Iecaras",
        "term": "Pansexual",
        "definition": "Attraction towards all genders / atrraction regardless of `gender identity`",
        "identity": "Age:15, Location:USA, Ethnicity: Hispanic/Latino",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-20T09:17:09.130Z",
        "name": "Abigail jones",
        "term": "Gender fluid",
        "definition": "It means.   To me. I. Larger. Wardrobe.    Also. It.   Mean s I can. Who.  Want to be.  Pis off parent to much",
        "identity": "Gender fluid trans gender.  Pansexual",
        "sort-as": ["gender-fluid", "gender fluid", "genderfluid"]
    },
    {
        "time_submitted": "2018-01-21T11:02:17.678Z",
        "term": "Iso",
        "definition": "It's an identity label for `nonbinary` people who don't also ID as `trans`. Since some `enby` people ID as trans and some don't, it's helpful to have the word iso to refer to issues that only relate to the second group. The term was coined by an anonymous user in an ask to the tumblr blog bigendering, and comes from the word \"isomer\" because `cis` and trans are isomer types (the post it was coined in: https://bigendering.tumblr.com/post/161610343001/this-isnt-a-question-just-me-being-a-nerd-but ). To me personally, it means a way to give more thought to the differences between nonbinary experiences (or communicate those differences better).",
        "identity": "Nonbinary, Ace Panromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T15:46:58.336Z",
        "name": "El",
        "term": "Sapphic",
        "definition": "A person with an attachment to/alignment with/identifies with womanhood who is attracted romantically &/or sexually to other people who experience womanhood.",
        "identity": "White, British, nonbinary, bisexual, queer, disabled",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T15:51:13.026Z",
        "name": "El",
        "term": "Nonbinary",
        "definition": "Someone who is not strictly male or female. The \"strictly\" part is important since many nonbinary people do experience feelings of maleness/manhood or femaleness/womanhood and some may consider themselves as a man but not just a man, or a woman but not just a woman, or someone who is both a man and a woman, or their gender may fluctuate between the two or not exist on that spectrum at all. Being nonbinary does not in any way relate to presentation and there are infinite ways to be nonbinary, there is no standard to follow.",
        "identity": "White, British, nonbinary, bisexual, queer, disabled, age 20",
        "sort-as": ["nb", "enby", "non-binary", "nonbinary", "non binary"]
    },
    {
        "time_submitted": "2018-01-23T18:40:07.569Z",
        "term": "Febfem",
        "definition": "Female exclusive `bisexual` female, a bisexual woman who chooses to only date women. Different from a `lesbian` because she still experiences attraction to men, she just doesn't pursue it.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:41:33.406Z",
        "term": "Agender",
        "definition": "A person who doesn't believe in gender, like atheist means not believing in a higher power.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:44:01.676Z",
        "term": "Bisexual",
        "definition": "A male or female who is attracted to both males and females",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-23T18:44:36.888Z",
        "term": "Trans woman",
        "definition": "A male who identifies as a woman",
        "sort-as": ["transgender woman", "trans women", "transgender women"]
    },
    {
        "time_submitted": "2018-01-23T18:44:57.116Z",
        "term": "Trans man",
        "definition": "A female who identifies as a man",
        "sort-as": ["transgender man", "transgender men", "trans men"]
    },
    {
        "time_submitted": "2018-01-23T18:48:22.771Z",
        "term": "Sexuality",
        "definition": "The sex/es you're attracted to in relation to the sex that you are.",
        "sort-as": ["sexuality", "sexual orientation"]
    },
    {
        "time_submitted": "2018-01-23T18:49:05.872Z",
        "term": "Stag",
        "definition": "A masculine `bisexual` woman",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:49:19.820Z",
        "term": "Doe",
        "definition": "A feminine `bisexual` woman",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:49:57.344Z",
        "term": "Transbian",
        "definition": "A `trans` woman who is attracted to women",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:50:43.781Z",
        "term": "Homogenderal",
        "definition": "Someone who is attracted to the same gender",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:51:24.192Z",
        "term": "Bigenderal/pangenderal/polygenderal",
        "definition": "Someone who is attracted to two or more genders",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:53:24.257Z",
        "term": "Heterogenderal",
        "definition": "Someone who is attracted to one gender that is not their own. (Included in this because they could also be attracted to both sexes, making them bisexual, but only want to date people who have a particular gender identity that isn't theirs)",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:53:57.507Z",
        "term": "Gay",
        "definition": "A `homosexual`",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:54:21.187Z",
        "term": "Homosexual",
        "definition": "Someone who is attracted to only their own sex",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-23T18:55:07.775Z",
        "term": "Transgender",
        "definition": "Someone who doesn't identify with the gender assigned to their sex",
        "sort-as": ["trans", "transgender", "transgender*", "trans*"]
    },
    {
        "time_submitted": "2018-01-23T18:56:31.656Z",
        "term": "Transsexual",
        "definition": "Someone who has sex `dysphoria`. They may or may not transition because of their dysphoria, but thus term can be used by anyone who feels they should have been born as the opposite sex.",
        "sort-as": ["trans", "transexual", "transsexual"]
    },
    {
        "time_submitted": "2018-01-23T22:32:03.846Z",
        "term": "Bi",
        "definition": "Attraction to multiple genders",
        "identity": "Bi 19 Caucasian",
        "sort-as": ["bi", "bisexual", "bisexuality", "biromantic"]
    },
    {
        "time_submitted": "2018-01-23T22:34:55.855Z",
        "term": "Homosexual",
        "definition": "Born exclusively attracted to the same sex",
        "identity": "South Korean born, American raised, lesbian female",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T00:45:57.592Z",
        "term": "butch",
        "definition": "a masculine `lesbian` for whom her lesbianism and masculinity are interconnected",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T00:48:06.769Z",
        "term": "lesbian",
        "definition": "A woman exclusively attracted to other women",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T00:50:08.083Z",
        "term": "dyke",
        "definition": "A derogatory word for a `lesbian` (sometimes also used against `bi` women). Some lesbians have reclaimed this word. Since it's never been used against me, I feel a lot more comfortable using it to describe myself than \"`queer`.\" \"Dyke\" also suggests, to me, a sort of androgynous but tough way of presenting that is uniquely lesbian.",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T00:52:55.754Z",
        "term": "boi",
        "definition": "A young masculine `lesbian`, `bi` woman, and/or `trans` man; sometimes an affectionate term. Often used in the Black communities, but sometimes also in lesbian BDSM communities, as the opposite of a `butch` \"Daddy\" (a masculine submissive)",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T00:54:12.299Z",
        "term": "bulldyke/bulldagger",
        "definition": "Derogatory terms for big/fat butches (masculine `lesbian`s), especially those who are Black. Some have reclaimed this.",
        "identity": "early 20s white butch lesbian",
        "sort-as": ["bulldyke", "bulldagger", "bulldyke/bulldagger"]
    },
    {
        "time_submitted": "2018-01-24T01:48:42.266Z",
        "term": "Bisexual",
        "definition": "Being attracted to more then one gender",
        "identity": "Bisexual",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-24T04:46:12.457Z",
        "term": "Stag",
        "definition": "A `bisexual` woman who is more masculine than feminine",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T15:08:31.726Z",
        "term": "stone butch",
        "definition": "a `butch` `lesbian` who does not want to be touched sexually in certain ways, especially because of `dysphoria` and/or trauma. there are different levels of stone-ness, with some stone butches desiring to receive oral sex but not to be penetrated, others to have their genitals touched through their clothes, and others not to have either their genitals nor chest touched at all. sometimes, \"soapstone butch\" is used for butches who have similar wishes but may relax these boundaries at certain times or with a specific partner.",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T15:11:11.612Z",
        "term": "stone femme",
        "definition": "either 1) a femme who does not want to be touched sexually in certain ways (similar to \"`stone butch`\") or 2) a femme who does not want to penetrated, give oral to, and/or touch their partner sexually (sometimes because of preference, and sometimes because they are the partner of a stone butch). this can be really confusing. generally, the second definition is more in use around older lesbians, while younger lesbians are more likely to use the first term",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T15:16:32.660Z",
        "term": "trans butch",
        "definition": "either 1) a `AFAB` `butch` who also identifies as transmasculine and/or a `trans` man or 2) a trans woman who also identifies as a butch lesbian. definition 1 is more common among older lesbians, who may be very confused at the prospect of a trans woman butch; AFAB trans butches are almost always female-attracted and partnered to AFAB femmes, who are often exclusively female-attracted but may call themselves \"`queer`\" out of respect for their partners. definition 2 is more common among younger lesbians, who will probably be offended at a `trans man` continuing to call himself butch.",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T15:46:47.171Z",
        "term": "OFOS (old-fashioned/old-school) butch/femme",
        "definition": "It's an acronym that gets used almost exclusively among older lesbians; it refers to a butch or femme who stay very much within traditional butch/femme roles, especially in a gentlemanlike/ladylike way",
        "identity": "early 20s white butch lesbian",
        "sort-as": ["old-fashioned butch", "old-school butch", "old-school femme", "old-fashioned femme", "ofos butch", "ofos femme", "ofos (old-fashioned/old-school) butch/femme"]
    },
    {
        "time_submitted": "2018-01-24T15:47:22.580Z",
        "term": "husbutch",
        "definition": "an alternative term for one's `butch` wife",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T15:47:49.013Z",
        "term": "gentlebutch",
        "definition": "an alternative to \"gentleman\" for butches. usually very tongue-in-cheek",
        "identity": "early 20s white butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-24T20:24:39.133Z",
        "term": "masculine-of-centre",
        "definition": "umbrella term for masculine LGBT people, especially transmasculine people, butch lesbians, and ambiguously queer AFABs. kind of problematic because it's often applied to people who don't consider themselves \"masculine\" and because \"moc\" already stands for \"men of colour\"",
        "identity": "early 20s white butch lesbian",
        "sort-as": ["masculine of center", "masculine of centre", "masculine-of-center"]
    },
    {
        "time_submitted": "2018-01-24T21:59:57.589Z",
        "name": "Alec",
        "term": "Pansexual",
        "definition": "It's liking a person by who they are, ex. Someone funny, someone intelligent, someone who is really positive, without caring about their `gender identity`. Pan people may like certain characteristics from certain genders, however it is not the most important part.",
        "identity": "I'm a queer Trans boy :D",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-24T22:30:22.669Z",
        "term": "Pansexual",
        "definition": "Attraction to all gender identities",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-24T23:05:50.779Z",
        "name": "A",
        "term": "Pansexual",
        "definition": "I define it as pansexuals can date/love anyone no matter how the other may define themselves (Including pronounces, sexuality, and race ect.) Pansexuals also can have standards or preferences and still identify themselves as pansexual.",
        "identity": "Panromantic Acesexual. Her/She.",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-25T05:26:50.891Z",
        "term": "Pansexual",
        "definition": "When gender doesn't matter when looking at potential mates",
        "identity": "Pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-25T18:57:56.499Z",
        "name": "Earl",
        "term": "Aromantic",
        "definition": "The lack of romantic attraction, not to be confused with feelings towards romance in general",
        "identity": "Bigender (they/them pronouns)",
        "sort-as": ["aro", "aromantic", "aromanticism"]
    },
    {
        "time_submitted": "2018-01-28T04:31:53.822Z",
        "name": "Drew W.",
        "term": "Scorpifluid",
        "definition": "A subset of `genderfluid` in which you know your gender is fluid, but the genders that it is fluid between cannot be determined",
        "identity": "Asexual sapphic scorpifluid",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-28T04:36:11.618Z",
        "name": "Jace/Alec",
        "term": "Abrogender",
        "definition": "I define it as a sort of layer gender. When I was first learning it, someone explained it as like when your gender is a Russian doll, and each layer is connected and goes into the next layer. That was the first time I had a perfect label for myself. I was so happy, and even happier as I knew someone who also was that gender.",
        "identity": "Abrogender, abrosexual, abroromantic, trans masc person.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-28T04:41:49.104Z",
        "name": "Rinoa",
        "term": "Asexual",
        "definition": "Someone who has no sexual attraction.",
        "identity": "Caucasian, America, Teen, Girl, Poor",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-01-28T05:15:08.416Z",
        "term": "Demigender",
        "definition": "Demigender is having strong feelings to a certain gender, but not completely. Ex: feeling 60% one gender and 40% another",
        "identity": "I’m genderfluid",
        "sort-as": ["demi", "demigender", "demi-gender"]
    },
    {
        "time_submitted": "2018-01-28T05:42:52.495Z",
        "name": "Nick",
        "term": "Genderqueer",
        "definition": "Meaning not restricted to male, female, neither, both, demiboy/girl, etc. Its a term that can fit anyone not `cisgendered`. Its like an umbrella term for when someone doesnt want to identify as one single term.",
        "identity": "A genderqueer panromantic asexual human",
        "sort-as": ["genderqueer", "gender queer"]
    },
    {
        "time_submitted": "2018-01-28T08:46:59.011Z",
        "name": "Wera",
        "term": "wlw",
        "definition": "Woman loving woman without specifying sexuality (can be `lesbian`, `bi`, `pan`, etc.). It is important for me when I look for uplifting photos because the lesbian tag occasionally has non-lesbian erasing or porn while bi doesn't focus on women.",
        "identity": "Sweden, 18, gender questioning",
        "sort-as": ["wlw", "woman-loving-woman", "woman loving woman"]
    },
    {
        "time_submitted": "2018-01-28T15:50:53.870Z",
        "name": "Gillian (spacerockets)",
        "term": "bisexuality",
        "definition": "my favorite definition is one by Robyn Ochs. it’s incredibly inclusive and makes it easy for anyone who wants to identify as bi, to be able to; \"i call myself bisexual because i acknowledge that i have in myself the potential to be attracted romantically and/or sexually to people of more than one gender, not necessarily at the same time, not necessarily in the same way, and not necessarily to the same degree.\" this definition includes ALL genders, ALL attractions (romantic & sexual), and validates people who think that they aren’t \"bi enough\" to id as bisexual because they aren’t 50/50 on all attractions. it’s the best definition i have found to date.",
        "identity": "i’m 17, female, bisexual",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-01-28T15:52:12.938Z",
        "term": "Biromantic/Panromantic",
        "definition": "Being romantically attracted to both(bi) or all(pan) genders. Only romantically though, this term does not identify one’s sexual preferences.",
        "identity": "White, New Jersey, 16, female, homosexual biromantic/queer",
        "sort-as": ["bi", "biromantic", "pan", "panromantic"]
    },
    {
        "time_submitted": "2018-01-28T16:22:30.171Z",
        "term": "Agender",
        "definition": "Genderless, no gender, or a neutral gender",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-28T16:23:19.044Z",
        "term": "Gay",
        "definition": "Attracted to same gender and/or sex, exclusively or not",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-28T17:32:07.568Z",
        "name": "Natalie",
        "term": "Demisexual",
        "definition": "Demisexual is where someone doesn’t feel sexual attraction until there is an emotional bond. For me personally, I may think someone looks nice/beautiful/attractive (I call that aesthetic attraction), or I may want to start a romantic relationship with them (romantic attraction), but I don’t want to see them naked or have sex with them. It’s not like a light switch for me either, like I suddenly want to do everything sexual with them all at once. It’s more gradual; I usually want to kiss someone before seeing them naked. In my own experience, it hasn’t been any emotional bond (ie friendship), but it has to be romantic in nature. I started knowing I was demisexual when my friends and I were discussing which celebrity we would sleep with. I said someone I admire and think is pretty, but I definitely wouldn’t want to sleep with them.",
        "identity": "A young white cisgender demisexual heteroromantic woman.",
        "sort-as": ["demi", "demi-sexual", "demisexual"]
    },
    {
        "time_submitted": "2018-01-28T19:57:41.755Z",
        "name": "Issac :)",
        "term": "Gender Dysphoria",
        "definition": "A feeling, whether it be emotional, physical or social, that your sex doesn't match your `gender identity`. It can be severely uncomfortable sometimes and sometimes be okay-ish. It can be a varied range of severity. You may hate your \"`bottom`\" and or your \"`top`\" (definitions for another day), which can leave you with low self esteem and lack of body confidence. Gender dysphoria normally accompanies transgenders and genders that are different from one's birth sex.",
        "identity": "Transgender",
        "sort-as": ["dysphoria", "gender dysphoria"]
    },
    {
        "time_submitted": "2018-01-28T20:01:33.966Z",
        "name": "Issac :)",
        "term": "Top",
        "definition": "Top is your breast area and is normally stated as top when discussing `gender Dysphoria`, where your breasts or lack of there of doesn't match up with the gender you present yourself as. You may hear \"top surgery\" if you're planning on transitioning. Female to male transition: removal of breast tissue. Male to female: breast implants.",
        "identity": "Transgender",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-28T20:05:43.983Z",
        "name": "Issac :)",
        "term": "Bottom",
        "definition": "Bottom is a name for your Genitalia in generalized terms. It is very common to refer to your genitalia as your bottom half when talking about `gender dysphoria`. You may hear \"bottom Surgery\" if you plan on transitioning from your current sex (genitalia) to the opposite one. There are a multitude of different bottom surgeries for everyones needs. Bottom surgery consists of either : Female to Male: Creating a penis and testicles. Male to female: Creating a vagina and clitoris.",
        "identity": "Transgender",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-29T02:49:55.996Z",
        "name": "lambencii",
        "term": "apothisexual",
        "definition": "not wanting any sort of sexual contact/connections and being repulsed with sex/sexual acts/possibly nudity",
        "identity": "transmasc panromantic apothisexual dude",
        "sort-as": []
    },
    {
        "time_submitted": "2018-01-29T17:16:15.958Z",
        "name": "pan-in-space",
        "term": "Pansexual",
        "definition": "Pansexual is the sexual attraction to all genders - even if you may prefer some genders over others, you are still pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-01-31T22:17:36.567Z",
        "term": "Asexual",
        "definition": "A person who does not feel sexually attracted to any genders. It does not have to be the same as a person's `romantic orientation` or any other orientations. This can refer to the asexual spectrum as a whole.",
        "identity": "Asexual, homoromantic or biromantic, non-binary",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-01-31T22:30:27.779Z",
        "name": "Dan",
        "term": "Demiboy",
        "definition": "Someone who does not completely identify as a male, usually go by he-him and/or they-them pronouns.",
        "sort-as": ["demi", "demiboy", "demi-boy"]
    },
    {
        "time_submitted": "2018-02-01T15:17:35.488Z",
        "name": "Eli (@pan-rants on tumblr and twitter)",
        "term": "Pansexual",
        "definition": "Pansexuality is the attraction to people of all gender identities. It’s also described as attraction that is not determined by gender identity. (This is not to be confused with bisexuality which is an entirely different identity)",
        "identity": "I am a upper lower class caucasian 16 year old nonbinary (agender) aromantic pansexual person",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-02-01T15:26:32.862Z",
        "name": "Eli (@aro-rants on tumblr)",
        "term": "Aromantic",
        "definition": "A person who is aromantic does not experience romantic attraction or experiences little to no romantic attraction. A person who is aromantic does not have to be `asexual` (a person who does not experience sexualitet attraction), and they might still experience sensual and aesthetic attraction.",
        "identity": "A upper lower class caucasian nonbinary (agender) aromantic pansexual 16 year old",
        "sort-as": ["aro", "aromantic", "aromanticism"]
    },
    {
        "time_submitted": "2018-02-01T16:42:33.049Z",
        "term": "Pansexual",
        "definition": "Pansexuality means to be attracted emotionally, physically and aesthetically to anyone, regardless of gender, but that does not mean they cannot have types or kinks.",
        "identity": "Pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-02-01T18:27:33.183Z",
        "term": "Pansexual",
        "definition": "Attraction to all genders. Sometimes with or without preferences for a specific gender.",
        "identity": "Canadian, 21, cis, pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-02-03T04:25:07.939Z",
        "name": "Theo",
        "term": "Pansexual",
        "definition": "the capacity to be sexually attracted to anyone, no matter their perceived gender.",
        "identity": "asian-american, USA, 15, genderfluid, demiboy, pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-02-03T08:11:19.744Z",
        "name": "Hayden",
        "term": "Transgender",
        "definition": "Someone who experiences `gender dysphoria` and wants to be who they are on the inside, on the outside. They are not trapped in the wrong body, it just doesn’t look the way it does in their mind. Usually goes through Hormone Replacement Therapy in order to change their physical appareance, sometimes Sex Reassigment Surgery is followed. I believe to identify as trans you must experience gender dysphoria and go through the process of transitioning. I know that financially not everyone is able to, but I believe you must socially and physically transition to be consider transgender.",
        "identity": "Transgender FTM, Caucasian, 18, living in America.",
        "sort-as": ["trans", "transgender", "trans*", "transgender*"]
    },
    {
        "time_submitted": "2018-02-03T11:55:17.479Z",
        "name": "Malte",
        "term": "Agender",
        "definition": "Agender is not identifying to neither male and female stereotypes (to me)",
        "identity": "Panromantic/agender/middle class/paris suburbs/anarchist/15 yo",
        "sort-as": []
    },
    {
        "time_submitted": "2018-02-03T15:18:48.626Z",
        "name": "Max",
        "term": "Pangender",
        "definition": "Most of the time identifying as all genders or multiple genders.",
        "identity": "Pangender",
        "sort-as": ["pan", "pangender"]
    },
    {
        "time_submitted": "2018-02-04T01:35:43.151Z",
        "name": "alex",
        "term": "trigender",
        "definition": "trigender means there is times you can feel like a guy girl or in between",
        "identity": "trigender, im irish",
        "sort-as": []
    },
    {
        "time_submitted": "2018-02-06T22:33:29.299Z",
        "name": "Rey Wolfe",
        "term": "Lgbt",
        "definition": "It means being accepted, no matter who you are attracted to or your `gender identity`.",
        "identity": "Genderflux Aromantic Pansexual",
        "sort-as": ["lgbt", "lgbtq", "lgbt+"]
    },
    {
        "time_submitted": "2018-02-08T05:57:18.821Z",
        "term": "Pansexual",
        "definition": "1. Attraction to all genders \n2. Attraction regardless of gender identity",
        "identity": "Black, 18, Proud Pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-02-09T04:54:26.206Z",
        "name": "Esmerelda",
        "term": "Polysexual/Polyromantic",
        "definition": "Attraction to more than two, but not all genders. May or may not lean towards certain genders/certain groups of genders within those attracted to. Falls under the `bisexual` umbrella.",
        "identity": "American, young adult, cis female",
        "sort-as": ["poly", "polysexual", "polysexuality", "panromantic"]
    },
    {
        "time_submitted": "2018-02-09T17:16:03.282Z",
        "name": "Ezra",
        "term": "demiboy",
        "definition": "between male and `nb` but closer to male",
        "sort-as": ["demiboy", "demi", "demi-boy", "demi boy"]
    },
    {
        "time_submitted": "2018-02-11T03:14:56.081Z",
        "term": "bisexual",
        "definition": "the attraction to 2 genders (commonly thought of as attraction to both those who identify as male and female but it does include attraction to any 2 genders)",
        "identity": "bisexual girl",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-02-17T22:56:16.648Z",
        "name": "Introvertedgirlsarentshy",
        "term": "Bisexuality",
        "definition": "Bisexuality is the attraction to people of your own gender and others. To me, bisexuality means being capable of attraction, wether it be sexual or romantic towards people of all kinds without being limited by a gender binary or genders themselves. I’m quite young so I don’t know yet if gender plays a part in my attraction at all, or just partially, but the label bisexual fits what I feel very well.",
        "identity": "I’m a white 17 year old biromantic asexual girl from a well off family.",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-02-19T21:05:47.297Z",
        "name": "alex",
        "term": "bisexual",
        "definition": "for myself, it’s mainly that i like\nmales and females, but i also like `nonbinary` people",
        "identity": "white, 17, nonbinary",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-02-22T02:50:22.323Z",
        "term": "Omnisexual",
        "definition": "Attraction to all genders and all people who identify as otherkin or therians",
        "identity": "Transmasculine polygender dude, omnisexual, omnialterous, omniromanric, and omnisensual",
        "sort-as": ["omni", "omnisexual"]
    },
    {
        "time_submitted": "2018-02-22T08:59:37.962Z",
        "name": "Alex",
        "term": "bisexual",
        "definition": "I define it as potential for attraction to two or more genders, but what it means to me is understanding and loving myself, and feeling like I belong.",
        "identity": "cis girl, white, mid teens, middle class (I don't like class identifiers but idk what else to call it)",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-02-22T20:08:08.446Z",
        "name": "Monday",
        "term": "Pansexuality",
        "definition": "The attraction to all gender, sometimes without caring about the person's gender, but not always. Pansexuality isn't the same thing as bisexuality.",
        "identity": "panromantic pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-02-22T21:10:09.515Z",
        "name": "Brynn",
        "term": "Lesbian",
        "definition": "Girls who are attracted to other girls",
        "identity": "North Carolina, 14, Female",
        "sort-as": []
    },
    {
        "time_submitted": "2018-02-27T00:52:56.574Z",
        "term": "Demiboy",
        "definition": "A person who doesn’t feel strongly with either the male or female identity, but expresses themselves as maculine. Basically, a `nonbinary` person who feels masculine.",
        "identity": "Androsexual Nonbinary",
        "sort-as": ["demi", "demiboy", "demi-boy", "demi boy"]
    },
    {
        "time_submitted": "2018-02-27T00:53:49.969Z",
        "term": "Androsexual",
        "definition": "One who feels romantic and sexual attraction towards masculine individuals",
        "identity": "Androsexual Demiboy",
        "sort-as": []
    },
    {
        "time_submitted": "2018-02-28T21:13:05.779Z",
        "name": "Alix Bohem",
        "term": "Pansexual",
        "definition": "It means that I don't like you based on what's on your face or in your pants, I care about you for who you are, not how you identify.",
        "identity": "American, New Jersey, 13, genderfluid, pansexual, and proud.",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-03-01T13:56:55.738Z",
        "name": "Quinn",
        "term": "bisexual",
        "definition": "being sexually attracted to two genders",
        "identity": "bisexual genderfluid",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-03-01T14:13:22.373Z",
        "name": "Skylar (birthname kimberly)",
        "term": "Pansexual",
        "definition": "To not have a boundary on who you like based in sexuality or gender. To me it just means that I like you for your personality and not your body parts.",
        "identity": "Latina, California, 13, I'm still questioning my gender but ik I'm not only female",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-03-02T18:49:27.084Z",
        "term": "Demisexual",
        "definition": "You don't have sexual desire until you become emotionally close ore connected to a person!",
        "identity": "21 year old biromantic demisexual female from Ohio (US)",
        "sort-as": ["demi", "demisexual", "demisexuality"]
    },
    {
        "time_submitted": "2018-03-02T20:56:24.951Z",
        "term": "Genderqueer",
        "definition": "Similar to the word `queer`, genderqueer is a sort of \"catch all term\" that means a gender that is out of the ordinary. Some folks (like me) like to identify with `trans` along with this label, others `non binary`, and some just simply genderqueer. To me it means that you don’t fit into a binary but you may not be outside it either; you’re a mix in your own way, similar to how if you look up the definitions of the colors of the genderqueer flag you’ll get some beautiful results about the chartreuse, white, and lavender.",
        "identity": "Genderqueer, white, American, middle class, 18",
        "sort-as": ["genderqueer", "gender queer"]
    },
    {
        "time_submitted": "2018-03-04T04:07:21.305Z",
        "name": "Echo",
        "term": "agender",
        "definition": "not having a `gender identity`, being genderless",
        "identity": "aroace, agender",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-07T05:28:01.037Z",
        "name": "Spencer",
        "term": "diamoric",
        "definition": "attraction that's neither gay nor straight because you're `nonbinary`",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-09T22:18:47.846Z",
        "name": "Kat",
        "term": "Pansexual",
        "definition": "Someone who likes people regardless of their `gender identity` or physical sex",
        "identity": "She/Her, Lesbian",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-03-12T22:15:55.263Z",
        "name": "Maria S.",
        "term": "Lesbian",
        "definition": "A woman that has romantic and/or sexual attraction to another woman",
        "identity": "Cis female, 17, Canada",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-12T22:18:14.622Z",
        "name": "Maria S.",
        "term": "Homoflexible",
        "definition": "Someone that mostly develops feelings and/or attraction to the same sex but occasionally develops feelings and/or attraction to the opposite sex",
        "identity": "Cis female, 17, Canada",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-12T22:47:53.182Z",
        "name": "Ryland",
        "term": "Pansexual",
        "definition": "Pansexual means that you are attracted to any gender, or at least more than one. It is similar to being `Bisexual`, and there seems to be an ongoing argument about the two and what they exactly mean. But, it's a label, and people are able to choose which label they want. People can consider themselves Pansexual while still mainly liking  only liking two genders, and vice versa. For me, Pansexual means attracted to any person, without really caring about gender. As a pansexual person, I usually don't find myself to be attracted to a specific person because of their body (unlike a lot of guys I've seen at my school). It's more of a personality thing with me, even though I know that many people care a lot about how a person looks. Other people probably have their own definitions for Pansexual, but that is my definition.",
        "identity": "A trans teen boy living in the U.S",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-03-12T23:48:37.513Z",
        "name": "Coral",
        "term": "Genderqueer",
        "definition": "Identifying as a gender other than what you were assigned at birth",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["genderqueer", "gender queer"]
    },
    {
        "time_submitted": "2018-03-12T23:46:18.837Z",
        "name": "Coral",
        "term": "Pansexual / Panromantic",
        "definition": "can be defined in one of two ways - sexual/romantic attraction to ALL genders, or sexual/romantic attraction REGARDLESS of gender.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["pan", "pansexual", "pansexuality", "panromantic"]
    },
    {
        "time_submitted": "2018-03-12T23:51:08.396Z",
        "name": "Coral",
        "term": "Gender Binary",
        "definition": "The classification of gender as two opposite genders: male and female.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-12T23:55:07.213Z",
        "name": "Coral",
        "term": "Non-binary Gender",
        "definition": "Identifying outsite of the gender binary. Either identifying as neither male nor female, identifying as a mix of both or somewhere in between, or identifying as a mix of multiple genders.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["non-binary gender", "non-binary", "nb", "nonbinary", "enby", "non binary"]
    },
    {
        "time_submitted": "2018-03-12T23:57:49.718Z",
        "name": "Coral",
        "term": "WLW",
        "definition": "Stands for woman loving women. Meaning any woman or woman aligned individual attracted to women or women aligned individuals.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["wlw", "woman loving women", "woman loving woman", "woman-loving-woman"]
    },
    {
        "time_submitted": "2018-03-13T00:03:34.449Z",
        "term": "demisexual",
        "definition": "not sexually aroused until after a deeper platonic bond if ever. talking about sex stuff is uncomfortable in almost all circumstances. different than `asexual` tho bcos when you do have that connection with someone you are aroused and still enjoy intimacy",
        "identity": "white, USA, 21, female, middle class",
        "sort-as": ["demi", "demisexual", "demi-sexual"]
    },
    {
        "time_submitted": "2018-03-13T00:03:43.934Z",
        "name": "Coral",
        "term": "Enby / NB",
        "definition": "(Noun) A person who identifies as `non-binary`. Used in place of \"man\", \"woman\", \"boy\", or \"girl\". (Ex. \"Date an enby who makes you feel special\" or \"'Are you a boy or a girl?' 'Actually, I'm an enby!'\")",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["non-binary", "nb", "nonbinary", "enby", "non binary"]
    },
    {
        "time_submitted": "2018-03-13T00:08:06.148Z",
        "name": "Coral",
        "term": "Queer",
        "definition": "Used to be more commonly used as a slur for the `LGBTQ+` community. Now it is being reclaimed by the LGBTQ+ community as an umbrella term for anybody who is not straight / `cisgender`. Whether or not an individual is comfortable using the term for themselves varies from person to person.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-13T00:10:16.462Z",
        "name": "Coral",
        "term": "Cishet",
        "definition": "Short for a person who is `cisgender` and heterosexual / straight",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["cishet", "cis het"]
    },
    {
        "time_submitted": "2018-03-13T00:25:36.865Z",
        "name": "Coral",
        "term": "Bisexual",
        "definition": "Attraction to two or more genders",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-03-13T00:34:02.335Z",
        "name": "Coral",
        "term": "Androsexual",
        "definition": "Sexual attraction to men or masculine individuals. Commonly used by people who are `non-binary` if they want a more gender neutral term for attraction to men or masculine individuals.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-13T00:36:08.429Z",
        "name": "Coral",
        "term": "Gynesexual",
        "definition": "Sexual attraction to women or feminine individuals. Commonly used by people who are `non-binary` if they want a more gender neutral term for attraction to women or feminine individuals.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-13T00:38:51.815Z",
        "name": "Coral",
        "term": "Skoliosexual",
        "definition": "Sexual attraction to `genderqueer` or `nonbinary` people.",
        "identity": "Genderqueer, pansexual, panromantic, white, mentally ill, feminist",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-18T02:13:46.159Z",
        "name": "Leo Dixon",
        "term": "Uranic",
        "definition": "It means that I’m attracted to trans and cis guys, neutral nonbinary people, masculine nonbinary people,  and agender people but not feminine nonbinary people, cis women, or trans women.",
        "identity": "I’m a 16 year old afab demiboy from Texas.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-19T00:59:43.954Z",
        "term": "Pansexual",
        "definition": "attracted to all people regardless of gender",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-03-23T15:07:01.979Z",
        "name": "Caleb Pelliccia",
        "term": "Belong",
        "definition": "I think It means to be comfortable as yourself",
        "identity": "Ftm male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-28T11:38:47.074Z",
        "name": "Joi'",
        "term": "Bisexuality",
        "definition": "Choosing to be your own you and not sticking to social standards, also like who you want to like people don't own us.",
        "identity": "16,African American,Chattanooga Tennessee",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-03-31T19:56:29.183Z",
        "term": "Bisexual",
        "definition": "Attraction to at least two genders.",
        "identity": "Bisexual.",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-04-08T21:06:20.072Z",
        "term": "bisexual",
        "definition": "being bi means you're attracted to multiple genders (not just girls and boys)",
        "identity": "biro ace",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-03-06T04:49:46.057Z",
        "term": "Bisexual",
        "definition": "Attraction to two or more genders, not necessarily in the same way and not necessarily to the same degree. People tell me I'm not bi because I'm dating a man - but I'm bisexual no matter who I'm dating. I'd be bi if I were dating a woman or a non binary person too. When I get married to spend the rest of my life with someone, I'll be bi then too.",
        "identity": "White, bisexual, cis woman, age 22",
        "sort-as": []
    },
    {
        "time_submitted": "2018-03-06T12:49:39.891Z",
        "term": "Queer",
        "definition": "\"Queer\" is used in lots of ways -- rather than undermining the term, this diversity is part of why it's so beautiful. It can be a version of \"bi\" that acknowledges more than 2 genders. It can highlight the way that attraction is more complicated than \"women + men,\" especially in a world where gender is flexible and complex. It can reflect an entire lifestyle based on appreciating the performativity and power in gender, and playing with that. It can be an umbrella term for the entire LGBTQ+ rainbow. Ever since I was little, I felt attracted to women's bodies but to \"masculine\" energy. I wanted someone to shovel the car out of the snow for me, and then to let me play with her boobs. For a long time I wondered if I was just a repressed lesbian, or a confused straight person. The term \"queer\" felt liberating for me in its nonspecificity -- it also fit nicely into my lifestyle of primarily dating butch women and transmasculine folks, which also doesn't fit a \"lesbian\" or a \"straight\" label.",
        "identity": "Queer, Boston, 26, White cis woman",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-10T23:49:04.474Z",
        "term": "Pansexual",
        "definition": "The ability to be attracted to people without gender being a defining aspect (though it is still possible to have preferences, similar to preferring brown hair, etc. you may prefer a certain gender). \nThis term has given me the freedom to work out what type of person I want to be with without worrying about fitting into gay or straight narratives.",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-04-11T00:53:51.482Z",
        "name": "Charlie",
        "term": "demiboy",
        "definition": "A gender identity that pertains to identifying partly as a boy and partly something else. \n I identify as a boy and `nonbinary`. The nonbinary part of me is more ambiguous and changes sometimes. In the past, I've identified with being `genderfluid`, `genderflux`, `agender`, etc.",
        "identity": "USA, 18",
        "sort-as": ["demi", "demiboy", "demi-boy", "demi boy"]
    },
    {
        "time_submitted": "2018-04-11T00:58:19.662Z",
        "name": "Charlie",
        "term": "aceflux",
        "definition": "When your sexual orientation is in flux between being `asexual` and allosexual (experiencing sexual attraction). \nSometimes I'll get sex repulsed and not experience sexual attraction or desire at all, but sometimes I feel sexual attraction and I'm all for having sex. Sometimes, the shift between being DTF and sex repulsed can happen very quickly, and when that happens, it's really hard because it can trigger my anxiety/panic attacks",
        "sort-as": ["ace", "aceflux"]
    },
    {
        "time_submitted": "2018-04-11T01:05:51.357Z",
        "term": "Soft Butch",
        "definition": "A soft butch is a woman who exhibits some stereotypical `butch` and lesbian traits without fitting the masculine stereotype associated with butch lesbians",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T02:16:31.671Z",
        "name": "Ava Elisabeth",
        "term": "Demiromantic",
        "definition": "The way I explain demiromanticism is having no romantic attraction (and at least for me, no interest in having a romantic relationship), except when you form a really strong connection and bond with a person, then for that person and only that person are you romantically attracted. \nFor me this mean, I won't have a crush on anyone, unless I am like they are like my best friend. \nI have had very few crushes throughout my life and I barely ever understand the allure of romantic relationships. When I do have crushes, they are always on my best friend, regardless of gender, and they are very intense. This term has made me feel less alienated from my peers, but I also kinda hate it.",
        "identity": "white ace girl",
        "sort-as": ["demi", "demiromantic"]
    },
    {
        "time_submitted": "2018-04-11T03:36:57.791Z",
        "name": "Michael",
        "term": "Polyam",
        "definition": "Loving/dating more then one person consentually with all parties of the relationship knowing each other. \nI am polyam, and currently in a triangle relationship (all dating eachother)",
        "identity": "16, trans-non binary guy (he/him)",
        "sort-as": ["poly", "polyam", "polyamorous"]
    },
    {
        "time_submitted": "2018-04-11T03:51:41.244Z",
        "name": "Jack",
        "term": "high femme",
        "definition": "A high femme, also called 'stone femme' is the opposite of a `stone butch`. They want to receive sexual contact but don't want to reciprocate.  \nSometimes this can carry a negative connotation, but as a stone butch, an ideal girlfriend would be a high femme. Another example of how lesbian relationships can often be vastly different than heterosexual ones.",
        "identity": "nb stone butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T03:53:04.407Z",
        "name": "Jack",
        "term": "bigender",
        "definition": "someone who experiences multiple gender identities at once. possibly feeling them simultaneously or switching between the two",
        "identity": "nb stone butch lesbian",
        "sort-as": ["bi", "bigender"]
    },
    {
        "time_submitted": "2018-04-11T04:01:51.766Z",
        "name": "Jack",
        "term": "queer",
        "definition": "queer is a slur that many LGBT community members have reclaimed. it is often used to describe an amalgamous or hard to define attraction that is not-straight. it is important to be sensitive to those who still view it as a slur. our community's comfort should come first.",
        "identity": "nb stone butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T04:03:51.442Z",
        "name": "Patrick",
        "term": "Gender Burnout",
        "definition": "Quite literally, exhaustion with experiencing gender and/or gender expression. \nI have felt this often, but haven't found a good definition for it. Hopefully by adding it here, other people who have felt this way will know that they're not alone. For me, it was the beginning of me questioning my `gender identity`.",
        "identity": "Caucasian cis male (maybe?), pansexual/bisexual",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T04:14:08.212Z",
        "term": "Baby lesbian",
        "definition": "A young `lesbian` new to the identity. An affectionate pet name for older lesbians to call very young lesbian. \nBaby lesbian was a comfortable place to sit while accepting my lesbianness. Not really an identity into itself but a good way to signify that I still had a lot to learn about myself. It's also just cute in a kinda dorky way. It made me feel safe and accepted when others used the term.",
        "identity": "Cis butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T04:30:16.730Z",
        "term": "Butch",
        "definition": "A masculine woman attracted to other women. Has its roots in working class `lesbian` communities, so it's usually represented by \"men's\" work clothes with maybe one nice suit. Sometimes used as a `gender identity` on its own, with some relation to `trans` and `nonbinary` communities.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T07:28:46.070Z",
        "term": "wig",
        "definition": "The moment of surprise akin to when a wig is snatched away",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T07:29:57.239Z",
        "term": "deadname/birthname",
        "definition": "the name given to a person at birth, which as a result of change in that individuals life no longer applies to them",
        "sort-as": ["deadname", "birthname", "deadname/birthname"]
    },
    {
        "time_submitted": "2018-04-11T08:17:36.397Z",
        "term": "Queer-platonic relationships",
        "definition": "A commited consenting relationship that's beyond simply friends and not romantic( it's in a gray area). It's not to be confused with being best friends, this is a relationship that is a platonic alternative for `aro`-spec people and non aro-spec people who don't want or like romantic relationships but want a partner. \nTo me this is an important relationship I want, but haven't yet got. As an `aromantic` it person I was hurt by the fact I didn't think I'd back able to have a partner as I didn't want a romantic or sexual relationship so I was really happy to find out I could still have a partner platonically",
        "identity": "White, non-binary, aromantic asexual",
        "sort-as": ["queer-platonic", "queerplatonic", "queer platonic", "queer-platonic relationships", "queer-platonic relationship"]
    },
    {
        "time_submitted": "2018-04-11T11:59:17.192Z",
        "name": "Clare",
        "term": "Demi Lesbian",
        "definition": "A demi lesbian is a girl who experiences sexual and or romantic attraction to other girls when they first connect with them. It is possible for them to have an initial interest in someone, but that feeling is usually fleeting.",
        "identity": "20, Cis Female, Lesbian",
        "sort-as": ["demi", "demi lesbian"]
    },
    {
        "time_submitted": "2018-04-11T13:14:40.988Z",
        "name": "Mae",
        "term": "GNC (Gender nonconforming)",
        "definition": "GNC can be anyone who doesn’t fit traditional gender roles, even `cisgender` people, such as a `butch` lesbian, `nonbinary` people, boys who wear dresses, etc. Both cis and `trans` people can use this label and it can affect your gender or not. \nI myself am questioning my gender and currently ID as a cis/`demigirl` butch lesbian and have always identified as gnc",
        "identity": "16 butch lesbian",
        "sort-as": ["gnc", "gender-nonconforming", "gender nonconforming", "gender non-conforming"]
    },
    {
        "time_submitted": "2018-04-11T13:17:58.289Z",
        "name": "Mae",
        "term": "Butch",
        "definition": "Butch is a term created by and for lesbians only that describes a masculine `lesbian` who rejects traditional feminine gender roles. This can be intertwined with a use of non she/her pronouns or even a `nonbinary` gender or a masculine sheher lesbian",
        "explanation": "I’m a gender questioning butch",
        "identity": "16 year old butch",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T16:56:06.619Z",
        "name": "Selina",
        "term": "Gender Fluid",
        "definition": "People who sometimes are female and sometimes male. My gender depends on the moment, I may awake feeling female and during the day start feeling male",
        "identity": "Latina, USA, 16, Gender Fluid, attracted to girls",
        "sort-as": ["genderfluid", "gender fluid", "gender-fluid"]
    },
    {
        "time_submitted": "2018-04-11T17:06:10.789Z",
        "name": "closet-keys",
        "term": "compulsory heterosexuality",
        "definition": "Compulsory heterosexuality is essentially a function of patriarchy that encourages women to form intimate relationships with men and discourages women forming intimate relationships with women through structural and interpersonal violence and oppression. \n\nFor example, the wage gap encourages women to form relationships with men in order to sustain a higher standard of living only accessible to some women through men’s income. In many places women are not allowed to adopt or face very real discrimination in seeking infertility treatments if they are not partnered with men. Women who form relationships with other women in our media are always shown as either dying or ending up partnered with men to create the cultural idea that relationships between women are not lasting or are doomed to fail. Our culture fetishizes relationships between women but shames love between them, so girls think that even if they’re attracted to women, they should pursue relationships with men as their public or primary relationship. Compulsory heterosexuality is teaching girls to understand attraction to mean responding to who is attracted to you or being attractive rather than who they actually want to form relationships with. It’s the insistence that `wlw` \"just haven’t met the right man yet\" or that they’re \"confused\" or \"will grow out of it.\" Compulsory heterosexuality is `trans` women being denied medication unless they tell therapists they’re attracted to men. It’s trans `lesbian`s being told that they’re not \"real women\" unless they’re straight.  It’s trans women being assaulted and stalked and killed for not adhering to `cis` men’s expectations of femininity or for not wanting to sleep with them. It’s `butch` lesbians being punished for not performing femininity for men by means of workplace and housing discrimination and physical assault. It’s corrective rape. It’s conversion therapy. It’s forced marriages. It’s straight male abusers isolating their `bisexual` partners from wlw communities and enacting physical or psychological violence on them for being attracted to women. \n\nAll of these things, from the direct physical violence to the subtle cultural ideology, create an effect where young `sapphic` women growing up try to understand their feelings for men and women through this context, and are often forced or coerced into interpreting their attraction to women as platonic or meaningless or wrong, and interpreting their unease or discomfort around men as attraction or arousal. \n\nIt’s a deeply distressing and disorienting phenomenon, and it’s a big part of the reason that the average age for `gay` women to come out is about a full decade later in life than gay men.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T17:07:47.449Z",
        "term": "Lesbian",
        "definition": "Lesbians are women (including `cis` women, `trans` women, and women-aligned `non-binary` people) who are exclusively attracted to other women.",
        "identity": "butch",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T17:11:32.372Z",
        "term": "Woman",
        "definition": "I think it’s useful to conceptualize womanhood using a \"family resemblances\" definition model. This model of definition suggests that some concepts cannot be defined by reducing them to their most fundamental parts because they have no single common characteristic. Instead we must understand them as drawing from a common pool of interrelated or similar qualities. \n\nTo me, \"woman\" is a combination of the sensory experience of being a woman (something you can understand about yourself), the way we define gender as a culture and what it means in terms of our interactions with others, and the state of being an oppressed class under patriarchy whose oppression is enforced by various manifestations of misogyny. \n\nDifferent women will relate to these aspects of womanhood in unique ways, but I believe those aspects of selfhood, experience, and material reality create the common pool of characteristics that define womanhood.",
        "identity": "somewhere between woman and non-binary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T17:18:48.125Z",
        "term": "trans woman",
        "definition": "A woman who was mistakenly assigned male at birth and, as a consequence of that mistake, was likely raised as boy. \nTrans women often face a particular intersection of misogyny and transphobia in our culture that leads to disproportionate rates of experiencing sexual violence, relationship abuse, employment and housing discrimination, and suicidal feelings.",
        "sort-as": ["trans", "trans woman", "transgender woman", "transgender", "trans women", "transgender women"]
    },
    {
        "time_submitted": "2018-04-11T23:17:29.822Z",
        "name": "Henry J",
        "term": "Graysexual",
        "definition": "Graysexual can be considered in between `Asexual` and Sexual. Someone who is graysexual experiences sexual attraction, but only sometimes and in varying degrees. Note: this does not mean that they require a certain gender or \"type\" to become aroused. If anything it is similar to being `aceflux`.",
        "identity": "Trans Male, Graysexual, Polya",
        "sort-as": ["graysexual", "gray asexual", "gray ace", "grey ace", "greysexual", "grey asexual"]
    },
    {
        "time_submitted": "2018-04-11T23:20:00.098Z",
        "name": "ava (my url is @ablesisters)",
        "term": "bambi lesbian",
        "definition": "a lesbian who prefers cuddles, kisses, etc. over sex. \ni embody this term because i prefer nonsexual contact over, well, sexual contact.",
        "identity": "latine nonbinary femme lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-11T23:23:01.186Z",
        "name": "Henry J",
        "term": "Polya",
        "definition": "Shortened term meaning Polyamorous. This is someone who is in a relationship of three or more people. Note: This does not mean that they are cheating. In order to be in a poly relationship, everyone should understand the situation and give consent.",
        "identity": "Trans Male, Graysexual, Polya",
        "sort-as": ["poly", "polyam", "polyamorous"]
    },
    {
        "time_submitted": "2018-04-12T00:22:44.011Z",
        "term": "Gold Star",
        "definition": "A lesbian that has only had sex with women.",
        "sort-as": ["gold star lesbian", "gold star"]
    },
    {
        "time_submitted": "2018-04-12T01:01:01.458Z",
        "name": "K.",
        "term": "Androgyne",
        "definition": "Literally \"an androgynous individual\"; someone who identifies with androgyny and/or feels that their `gender identity` has both \"male\"/\"masculine\" and \"female\"/\"feminine\" elements to it.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-12T01:06:46.562Z",
        "name": "K.",
        "term": "Gender-nonconforming (GNC)",
        "definition": "Anyone whose identity or expression doesn't fit with traditional ideas of maleness and femaleness; a GNC person might describe themselves as neither male nor female, or they might describe themselves as one but express themselves in ways, and take on societal roles, traditionally associated with the other. (I.e., someone might describe themselves as female, but express masculinely and take on the roles of a man; someone might describe themselves as male, but express femininely and take on the roles of a woman; both of these people would be GNC.)",
        "sort-as": ["gnc", "gender-nonconforming", "gender nonconforming", "gender non-conforming"]
    },
    {
        "time_submitted": "2018-04-12T01:25:07.932Z",
        "term": "Fuch-- a lesbian marker/identity term",
        "definition": "Futch is a literal mixing of the terms `femme` and `butch`, signifying that users of the term take elements from both labels. \nI've found myself very comfortable as a `lesbian` mixing elements of both masculine and feminine elements within the lesbian subculture. It's a more hybrid and fluid term to me than simply butch or femme.",
        "identity": "Lesbian teen",
        "sort-as": ["futch", "Fuch-- a lesbian marker/identity term"]
    },
    {
        "time_submitted": "2018-04-12T04:19:49.627Z",
        "name": "CJames",
        "term": "stem",
        "definition": "Stud + Femme = stem",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-12T15:43:43.856Z",
        "name": "Alex",
        "term": "Demisexual",
        "definition": "To me, demisexual means that you only become sexually attracted to someone after developing a strong emotional bond/connection with them. \nThis term has meant that while I can still get little crushes on people, that feeling becomes more intense if I become close to the person emotionally.",
        "identity": "Korean-American, 14, genderfluid, bi/demisexual",
        "sort-as": ["demi", "demisexual", "demisexuality"]
    },
    {
        "time_submitted": "2018-04-12T22:10:35.831Z",
        "term": "Transmasc",
        "definition": "A term to describe all `trans` guys and masculine-identifying `nonbinary` people",
        "sort-as": ["transmasc", "transmasculine", "trans masc"]
    },
    {
        "time_submitted": "2018-04-12T22:12:04.519Z",
        "term": "Transsexual",
        "definition": "An older term for `transgender` that can be seen as offensive today.",
        "sort-as": ["transexual", "transsexual"]
    },
    {
        "time_submitted": "2018-04-12T22:29:27.222Z",
        "term": "mlm",
        "definition": "a man or male-aligned person who experiences attraction to other men",
        "sort-as": ["mlm", "man loving man", "men loving men", "men loving man", "man-loving-man"]
    },
    {
        "time_submitted": "2018-04-12T22:55:38.149Z",
        "name": "Ross",
        "term": "Questioning",
        "definition": "Someone who is unsure of their gender and/or `sexual orientation`. \nI once questioned my sexuality and gender. All throughout 6th grade and present. I wasn't sure if I was straight or `bi`- or `poly`- or `pansexual`. i wasn't even sure if I was 100% female.",
        "identity": "Transmasc Bigender (Demigender + Agender) Bisexual",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-12T23:14:53.281Z",
        "name": "Samantha Egnew",
        "term": "Demigirl",
        "definition": "Someone who identifies partly as a girl, but also as `non-binary`. Usually preferring she and they pronouns. \nI identify as a demigirl, `afab` I’m usually referred to by she/her pronouns, I’m ok with this but it makes me somewhat uncomfortable. People that I’ve come out to will now sometimes use they pronouns, which feels more right to me. ",
        "identity": "15, Demigirl (she/they pronouns)",
        "sort-as": ["demi", "demigirl", "demi girl", "demi-girl"]
    },
    {
        "time_submitted": "2018-04-13T00:31:51.592Z",
        "name": "Zara",
        "term": "Polyamorous",
        "definition": "To have the capacity to be in love with more than one person at a time.",
        "identity": "A polyamorous, bisexual, cis woman",
        "sort-as": ["poly", "polyam", "polyamorous", "polya"]
    },
    {
        "time_submitted": "2018-04-13T01:13:25.896Z",
        "name": "Craigory Byrd",
        "term": "Butch-Femme Lesbian",
        "definition": "I like to use the term Butch femme to describe myself as a lesbian because I feel like while I show many masculine traits I also tend to remain relatively feminine, and it's just the way I like to say that.",
        "sort-as": ["butch femme", "butch-femme", "butch femme lesbian", "butch-femme lesbian"]
    },
    {
        "time_submitted": "2018-04-13T10:44:49.121Z",
        "term": "Bottom",
        "definition": "In sexual intercourse, the \"bottom\" is the recieving party. Used specifically in homosexual context.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-13T17:16:47.384Z",
        "name": "alice",
        "term": "pansexual",
        "definition": "i only love people for their personalities, gender doesn't matter",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-04-13T19:31:26.651Z",
        "term": "Futch",
        "definition": "Futch is a term that was originally created as a joke, though many now identify with it in earnest. The word comes from a combination of butch and femme; the identity itself is related to embodying both identities in some way or another. Although \"kiki\" has its root in derogatory language, \"Kiki\" is perhaps the closest historical identity to futch in the lesbian community. ",
        "identity": "white butch nb lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-13T19:31:42.234Z",
        "term": "pangender",
        "definition": "Pangender is identifying as all genders, however it is a racist term as this includes culture-specific genders.",
        "sort-as": ["pan", "pangender"]
    },
    {
        "time_submitted": "2018-04-13T19:35:02.422Z",
        "term": "Gold Star Lesbian",
        "definition": "Most simply, this term can be defined as \"a lesbian that has never had sex with a man.\" However in its actual usage is deeply linked to trans-misogyny, gate-keeping and biphobia. Often trans-misogynists will misgender trans women when using this term and others will use it as a way of implying someone is superior or \"more of a lesbian\" if they have never had sex with a man.",
        "identity": "white nb butch lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-13T21:35:25.931Z",
        "name": "Timothy Green",
        "term": "stone butch/fem(me)",
        "definition": "stone is a 'lesbian' identity that adds on to either 'butch' or 'femme'/'fem'. a stone butch is a butch lesbian who does not like to be touched or to \"receive\" sexually and a stone fem(me) does not like to touch, top, or \"give\" sexually, both for reasons of trauma, dysphoria, and/or gender identity. Stone butches and fem/mes often have very strong presentations, but \"stone butch\" does not inherently mean very/hard butch.\nI am a stone butch lesbian due to trauma, dysphoria, and gender identity. a lot of people think that stone butch just means hard in presentation and it's frustrating. read stone butch blues.",
        "identity": "stone butch lesbian",
        "sort-as": ["stone butch", "stone femme", "stone butch/fem(me)"]
    },
    {
        "time_submitted": "2018-04-14T04:18:44.861Z",
        "term": "Ipsogender",
        "definition": "The simultaneous states of identifying with the gender assigned to you at birth, and being an intersex person whose experience with that gender is ultimately not protected or centered by cissexism.",
        "identity": "Genderqueer intersex middle eastern",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-14T04:29:50.260Z",
        "term": "androgynous gay",
        "definition": "A homosexual that takes on both masculine and feminine traits, interests, or characteristics. \nI've noticed a lot of these terms for females, but none for males. I am a male who dresses masculine and (to my own knowledge) acts masculine, but there are a lot of female-esque things I like, and there's nothing that defines me. I have also been described on some occasions, as looking male or female.",
        "identity": "caucasian, usa, 16, male, gay, liberal, agnostic",
        "sort-as": ["androgynous", "androgynous gay"]
    },
    {
        "time_submitted": "2018-04-14T04:44:54.717Z",
        "name": "River",
        "term": "Pansexual",
        "definition": "Potential attraction (romantic and sexual) to any person, regardless of gender/gender identity. \"Liking someone for their personality and/or aesthetically pleasing features, not what's in their pants.\"\nI previously thought I was bi, but when I came across this term, I felt it much more applicable. Since then I have embraced being pan further and really tapped into my side of loving all genders. Having this label and being able to belong to this group makes me so happy and I want people to know about my identity and other pansexuals to be able to identify a early as they can.",
        "identity": "Lower Middle class, teens, American, pansexual, female and she/her pronouns, ADHD and low sensory processing disorder",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-04-14T04:48:59.109Z",
        "name": "Benton",
        "term": "Polygender",
        "definition": "A multigender identity in which one experiences multiple genders.",
        "identity": "Polygender Transsexual man",
        "sort-as": ["poly", "polysexual", "polysexuality"]
    },
    {
        "time_submitted": "2018-04-14T04:51:14.120Z",
        "term": "Sexual Orientation",
        "definition": "The orientation that describes your sexual attraction and desires",
        "sort-as": ["orientation", "sexual orientation"]
    },
    {
        "time_submitted": "2018-04-14T09:26:36.077Z",
        "term": "Omnigay",
        "definition": "A term defined by gay being an important part of one’s identity but the gender is fluctuating. Regardless of gender, they’re always gay.",
        "identity": "Asexual, demibiromantic, demigirl, 17, white, Florida",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-14T13:15:27.104Z",
        "name": "Theo",
        "term": "bigender",
        "definition": "Someone who is two or more genders, either at the same time or being fluid between them. There is no restriction on what the genders can be. Someone who is fluid may prefer the term 'genderfluid'.",
        "sort-as": ["bi", "bigender"]
    },
    {
        "time_submitted": "2018-04-14T13:19:00.654Z",
        "name": "Theo",
        "term": "biromantic",
        "definition": "Romantic attraction to two or more genders. It doesn't matter what specific genders these are.",
        "sort-as": ["bi", "biromantic"]
    },
    {
        "time_submitted": "2018-04-14T13:39:08.517Z",
        "term": "Pansexual",
        "definition": "Some one who can flirt with anybody without worrying about their gender/gender identity",
        "identity": "Midwest pansexual",
        "sort-as": ["pan", "pansexual", "pansexuality"]
    },
    {
        "time_submitted": "2018-04-14T13:50:54.545Z",
        "term": "Polygender",
        "definition": "Identifying with multiple genders at the same time or a combination/mix of different genders. 'Bigender', 'trigender' and 'pangender' can be considered specifications of polygender.",
        "identity": "White, european, teenager, non-binary fluidflux who's usually polygender",
        "sort-as": ["poly", "polygender"]
    },
    {
        "time_submitted": "2018-04-14T13:52:33.562Z",
        "term": "Ceasesexual",
        "definition": "An a-spec orientation where sexual attraction will often come to a suddeb hault for a while.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-14T13:53:22.535Z",
        "term": "trigender",
        "definition": "Identifying as three genders at the same time.",
        "identity": "european teen, non-binary fluidflux and polygender.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-14T14:01:14.448Z",
        "term": "Aporagender",
        "definition": "Specific gender that is not male, masculine, female, feminine, neutral, androgyne, a lack of gender or combination. It is a third specific gender in addition to male and female. Similar to 'maverique'.",
        "identity": "white european teen, non-binary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-14T14:05:23.284Z",
        "term": "Maverique",
        "definition": "How I understand it, its a third specific gender, like 'aporagender', only more specific to people who only and always identify as this. It is a specific gender, so not a lack of or neutral gender, and only one gender, not more, and yet it is not male, masculine, female or feminine.",
        "identity": "European non-binary teen",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-14T17:31:38.572Z",
        "name": "Theo",
        "term": "stellarian",
        "definition": "A person who has gender experiences in a purely nonbinary manner.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-15T16:38:48.226Z",
        "term": "agender",
        "definition": "A non-binary gender identity characterized as having/experiencing a lack of a gender. People who are agender can still identify with terms such as `transmasculine` and `transfeminine`.",
        "identity": "aroace, transmasc agender",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-15T22:32:48.170Z",
        "term": "Autochorissexual",
        "definition": "The term autochorissexual was coined by Anthony Bogaert and is derived from ‘autochoris’ which translates to 'identity-less sexuality’. It is a subset of asexuality which is defined as: a disconnection between oneself and a sexual target/object of arousal; may involve sexual fantasies or arousal in response to erotica or pornography, but lacking any desire to be a participant in the sexual activities therein.\n\nAutochorissexuals are known to:\n\n- Get aroused by sexual content but not actually want to engage in any sexual activities\n- Masturbate, but are neutral or repulsed by the idea of having sex with another person.\n- Fantasize about sex, but envision people other than themselves, and/or view it in third person, as though they're watching it on TV, rather than imagining it in first person, through their own eyes.\n- Predominantly or entirely fantasize about fictional characters or celebrities, rather than people in real life they know.\n\nIdentify as asexual and feel no sexual attraction to people, but enjoy masturbating, are aroused by sexually explicit content, and/or have sexual fantasies.\n\nWhile this mostly occurs in asexual people, an analogous feeling may occur in aromantic people with romantic fantasies instead of sexual ones.\n\nAnthony Bogaert explains his investigations about asexuality and autochorissexualism in his book 'Understanding Sexuality'. If someone interested I recommend to read it, it's a pretty good book.\n\nAutochorissexuality is also refered to as 'aegosexuality'.",
        "identity": "Aro Ace Autochorissexual",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-16T08:13:09.545Z",
        "name": "Olivia",
        "term": "Bisexuality",
        "definition": "Sexual attraction to more than one gender",
        "identity": "Metis, Canadian, 20, Trans Female, Poor, Bi/Ace",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-04-16T19:45:39.271Z",
        "name": "Ray",
        "term": "abrosexual",
        "definition": "Abrosexual is when a person's sexual orientation is fluid. At one time they could be attracted to only women,  another time only men, sometimes both, or even attracted to nonbinary people, or sometimes to no gender at all. It's different from being just bi or pan, because who they are attracted to completely changes, where as with bi or pan, only the preference to a gender changes but they are still attracted to that gender.",
        "identity": "White Genderfluid person who is questioning their sexual identity, from a mid class family in america. ",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-16T21:13:23.763Z",
        "name": "Aiden",
        "term": "agenderflux",
        "definition": "Agenderflux is a term to define a person whose gender fluctuates in strength from 'agender' to another gender on either or both sides of the spectrum.",
        "identity": "pansexual genderqueer girl",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:23:35.746Z",
        "name": "Malachai",
        "term": "DFAB",
        "definition": "Stands for Designated Female At Birth.\nEssentially when a DFAB person was born the doctor looked at their genitals and wrote f for female on the birth certificate and congratulated their parents on their beautiful baby girl.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:29:15.219Z",
        "name": "Malachai",
        "term": "Soft boy",
        "definition": "A feminine boy who has a sort of flower crown aesthetic. Often, but not exclusively used by trans boys.",
        "identity": "White, NB/agenderflux, transmasc",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:36:19.157Z",
        "term": "Visigender",
        "definition": "A gender that is best described using images, visual aides etc., as you are unable to put it into words due to neurodivergence. For neurodivergent people only.",
        "identity": "I'm a gay trans man from MA.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:44:08.578Z",
        "term": "nonbinary lesbian",
        "definition": "Someone who is a lesbian, but also nonbinary. This individual could view themself as nonbinary because of how their being a lesbian affects their gender and how they perceive it, or may consider their lesbian identity their only connection to womanhood. It could be because they are, for instance, agender, but feel a connection to womanhood and are exclusively attracted to women and other people who are partially women or consider themselves exclusively connected to womanhood, or it could be because they're bigender, for example both neutrois and female, and are exclusively attracted to women and other nb people who associate themselves with womanhood and sapphic identity. The experience of being a nonbinary lesbian cannot be pinned to a single definition or experience, and many nonbinary lesbians will have varying experiences with their gender. However, the nonbinary identity does not negate or diminish the lesbian one, and vice versa.",
        "identity": "nonbinary, questioning but wlw & likely a lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:45:02.314Z",
        "term": "Transsexual",
        "definition": "A term that was originally designed by the medical and psychology fields, Now defines someone who wishes to transition their body to a sex that differs than their assigned birth. They either plan to physically transition, are currently doing so, or have already physically transitioned. These transitions may include any of the following, not all are listed: Top surgery(breast implants/breast removal/breast reduction), Bottom surgery (female to male/male to female genital surgery, bigenital surgery, or non-genital surgery), Hormones, facial surgeries, vocal chord surgery, or Hair reduction/implants.\nNot all transgender people identify as transsexual, and not all transsexual people necessarily identify with transgender.\nAddresings:\nTranssexual Male/Man\nTranssexual Woman/female\nTranssexual Androgynous (Or Androgynous)\nTranssexual Angenital (Or simply Angenital)\nTranssexual Bigenital/Salmacian(Or simply Bigenital/Salmacian)\nI am Transsexual. I'm a transsexual male that is considering keeping my bottom genitals and just adding a penis as well. (Also nonbinary/transgender)",
        "identity": "Transsexual male, Bigenitalflux, Polygender/Vaguefluidflux. Omnisexual/Polyromantic. Polyamorous. Aceflux/Sensualflux. Twinkby",
        "sort-as": ["transexual", "transsexual", "trans"]
    },
    {
        "time_submitted": "2018-04-17T01:47:44.929Z",
        "term": "Agenderflux",
        "definition": "Having fluctuating feelings of being agender (Someone may feel agenderflux and also boyflux, for example.)",
        "identity": "I'm a gay trans man from MA.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:48:01.289Z",
        "name": "Benton",
        "term": "Twinkby",
        "definition": "A nonbinary boy/masculine aligned person who presents similarly to a Twink and is attracted to males, either exclusively or not. They tend to be submissive during intimate times and in relationships.\nThe name is made from the words \"Twink\" and \"Enby\"",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:48:49.190Z",
        "term": "Amaregender",
        "definition": "A gender that changes depending on who you are currently romantically attracted to",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:52:05.513Z",
        "term": "Cloudgender",
        "definition": "a gender that cannot be fully realized or seen clearly due to depersonalization/derealization disorder",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:53:56.727Z",
        "term": "Domgender",
        "definition": "having more than one gender yet one being more dominant than the others",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:54:47.933Z",
        "term": "Egogender",
        "definition": "a gender that is so personal to your experience that it can only be described as “you”",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:55:07.701Z",
        "term": "Maverique",
        "definition": "Maverique is a gender that is neither male or female, but is also not neutral, and also not a lack of gender. If genders were colors, and female was red and male was blue, maverique could be seen as yellow. The term was coined by Vesper (@queerascat on tumblr and QueerAsCat on YouTube) around 2014, the first time they mentioned the term on their YouTube channel (in a video titled \"Goodbye Neutrois, Hello Maverique (ie. me changing labels)\"). \n\nPeople who refer to themselves as maverique can include people whose only gender is maverique, people who are bigender and one of their genders is maverique, people who are genderfluid and one of their genders is maverique, people who are genderflux maverique, and so forth. \n\nA person who is maverique may refer to themself as a mav, and maveriques as a whole may be called mavs. For instance, \"Those three people are mavs and are all happy with their gender.\"",
        "identity": "Genderfluid person who shifts between maverique and other genders",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:56:45.505Z",
        "term": "Femfluid",
        "definition": "having fluctuating or fluid gender feelings that are limited to feminine genders",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:58:00.867Z",
        "term": "Genderfuzz",
        "definition": "the feeling of having more than one gender that are somehow blurred together to the point of not being able to distinguish or identify individual genders",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:58:53.666Z",
        "name": "Lee",
        "term": "genderqueer",
        "definition": "Genderqueer is sometimes used as a blanket term for multiple nonbinary identities, but can also be used as a more specific term that describes someone whose gender is, well, queer. It’s similar to describing a difficult-to-explain sexuality as queer, and so it gives genderqueer people a lot more freedom to identify a certain way while still using a commonly-known term.\n\nIn response to the definition that shows first on the page's results for genderqueer- I'm genderqueer and I've identified as genderqueer for years, and while non-binary is a better label to refer to people who are not male or female, genderqueer is not \"outdated\" as a self-identifer for gender identity. I'm non-binary and genderqueer and it's a perfect label for me, I've never found a term that makes me more comfortable than that. Just because the person who created the genderqueer pride flag supports some problematic things it doesn't mean the genderqueer label or identity is inherently \"offensive\" like that other definition says.",
        "identity": "Black,genderqueer,18",
        "sort-as": ["genderqueer", "gender queer", "gender-queer"]
    },
    {
        "time_submitted": "2018-04-17T01:59:35.243Z",
        "term": "Solarian",
        "definition": "A nonbinary person who has similarities in identity or experience with men. The term functions as a less easily abused form of ‘male aligned.’",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T01:59:54.430Z",
        "term": "Lunarian",
        "definition": "A nonbinary person who has similarities in identity or experience with women. The term functions as a less easily abused form of ‘female aligned.’",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T02:00:10.918Z",
        "term": "Social Dysphoria",
        "definition": "Typically refers to aspects of dysphoria that do not have to do directly with the body. Common types of social dysphoria relate to being called by one's dead name, or being referred to with incorrect pronouns, honorifics, or terminology. Social dysphoria not \"lesser\" than physical dysphoria, and if a person requests to use different names, pronouns, or terminology but does not express a desire to medically transition, they are no less transgender for that.",
        "identity": "Genderfluid",
        "sort-as": ["dysphoria", "social dysphoria"]
    },
    {
        "time_submitted": "2018-04-17T02:09:00.932Z",
        "name": "Charlie",
        "term": "Asexual",
        "definition": "Someone who doesn't experience sexual attraction. They may have, want, or enjoy sex, or they may not, but they don't experience sexual attraction.",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-04-17T02:10:42.560Z",
        "term": "Quoigender",
        "definition": "Someone who can't tell whether they experience a gender or not, or feel that gender doesn't apply to them, or that they are unable to define their gender in any meaningful way. This term is sometimes used as an alternative to \"questioning,\" but it is also a full identity on its own.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T02:15:11.763Z",
        "term": "Genderqueer",
        "definition": "A word for people who are not fully a boy or a girl. Another term for `nonbinary`",
        "identity": "Panromantic trans man",
        "sort-as": ["genderqueer", "gender queer", "gender-queer"]
    },
    {
        "time_submitted": "2018-04-17T02:15:50.318Z",
        "term": "Solarian",
        "definition": "Someone who identifies as male aligned nonbinary. That is, a nonbinary person who feels more masculine than say an agender person. The term comes from the cultural association between masculinity and the sun (for example, the Greek god of the sun Apollo).\nThis term helped me figure out what exactly it was that I identified as. While I prefer they/them pronouns overall, I am perfectly fine with he/him pronouns as well, and I plan on getting corrective surgery as well as going on T when I'm older so that I look more traditionally masculine. I am not a guy, though.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T02:21:17.404Z",
        "name": "aj",
        "term": "greygender",
        "definition": "experiencing gender, but not having too much attachment to it/experiencing it less intensely than non-greygender people. it's like a modifying term you add to the beginning of another gender identity. for example, i, myself, identify as greygender genderfluid",
        "identity": "taiwanese american, trans nonbinary/gender nonconforming/genderqueer/greygender genderfluid, bisexual/queer",
        "sort-as": ["graygender", "greygender"]
    },
    {
        "time_submitted": "2018-04-17T02:23:54.816Z",
        "name": "aj",
        "term": "androgyne",
        "definition": "the gender identity form of androgynous; feeling both masculine and feminine genders equally intensely. androgyne is not referring to gender presentation (that would be androgynous), but rather an actual gender identity.",
        "identity": "taiwanese american, trans nonbinary/gnc/genderqueer/greygender genderfluid (flowing between agender, androgyne, transmasc), bisexual/queer",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T02:51:22.339Z",
        "term": "Platonic relationship",
        "definition": "To be in a loving relationship with out sex.\nIt’s honestly awesome.  In my opinion it’s like friends with benefits but instead of sex it’s cuddling or debating the meaning of life.  It’s having you best friend with you to always support you.",
        "identity": "Asexual/Female/U.S",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T03:09:57.380Z",
        "term": "Aplatonic",
        "definition": "A term coined within the asexual/aromantic community for use by people who have trouble forming platonic relationships. This can be due to trauma or mental health reasons but it doesn't have to be. Not to be confused with nonamory.\nAn extension of my aroace identity to further explain my relationship to those around me.",
        "identity": "Aroace nonbinary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T03:12:39.004Z",
        "term": "Nonamory",
        "definition": "An aromatic/asexual  term referring to someone who does not want a committed platonic relationship (more commonly referred to as a QPR or queer/quasiplatonic relationship) but can be extended to mean not being interested in an kind of amorous relationship at all.",
        "identity": "Aroace nonbinary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T03:22:25.283Z",
        "term": "QTPOC/QPOC",
        "definition": "\"Queer/Trans person on color\" and \"Queer person of color\" an umbrella term for poc that are queer/trans or both.\nA term I use to connect with my community.",
        "identity":", non binary, latine",
        "sort-as": ["qtpoc", "qpoc", "qtpoc/qpoc", "qpoc/qtpoc", "queer trans person of color", "queer person of color", "queer/trans person of color"]
    },
    {
        "time_submitted": "2018-04-17T03:40:57.749Z",
        "term": "Demigirl",
        "definition": "Indentifying as feeling partly a woman, but also feeling partly of another gender. Often used when someone identifies as feminine genders, but does not wholly know what other genders they may identify as. A sort of middle ground between binary woman and nonbinary. Not to be confused with bigender. \nThis term has made me feel like I belong; that I'm not a confused identity floating in the wind. This term allows me to get some sort of grasp on who I am, as identifying partly as something and not knowing the other part(s) I identify as can be hard and discouraging.",
        "identity": "I am a Caucasian high school student who identifies as a panromantic asexual demigirl",
        "sort-as": ["demi", "demigirl"]
    },
    {
        "time_submitted": "2018-04-17T03:51:09.393Z",
        "term": "asexual",
        "definition": "not experiencing sexual attraction to anyone. may still have libido/want to have sex but not always.",
        "identity": "asexual biromantic girl",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-04-17T03:53:02.114Z",
        "term": "biromantic",
        "definition": "romantic attraction to two or more genders. may or may not experience sexual attraction.",
        "identity": "asexual, biromantic, female, 14",
        "sort-as": ["bi", "biromantic"]
    },
    {
        "time_submitted": "2018-04-17T05:21:47.238Z",
        "name": "James",
        "term": "Bisexual and biromantic",
        "definition": "Bisexual means being sexually attracted to two or more genders. Biromantic is similar; being romantically attracted to two or more genders. A person can be both biromantic and bisexual, of course. \n\nA bi person doesn’t have to like all of the genders they are attracted to equally. Some may be more attracted to men, for example. Some may have a more fluid sexuality where the levels in which they like certain genders change day to day, week to week, etc. Some may be romantically attracted to certain genders and sexually attracted to other genders. Some do, of course, like all of the genders they are attracted to equally. It is a very broad definition and the only way to “fit” the label is being someway attracted to more than one gender.\nIn my experience (because I am bi I’ve done a lot of research haha), it means being attracted to more than one gender and simply that. Explaining it too much gets too confusing as many people have different ideas on what it means to them! \n\nFor me I like all genders but I don’t call myself pansexual because I don’t like people regardless of their gender. Sometimes I have more “straight” days (I like girls or feminine people more) or “gay” days (where I like guys or masculine people more) and mostly I have days where it’s very evenly mixed. I don’t like describing it like that because technically I’m never straight and it feels weird (because I feel like it sounds like I am saying femininity=girl and vice versa and I’m not saying that) haha but it’s the quickest way to get my point across and this is already very long haha. I hope this is helpful",
        "identity": "I am a white, Canadian, 16-year-old guy who is also bisexual.",
        "sort-as": ["bi", "bisexual", "biromantic"]
    },
    {
        "time_submitted": "2018-04-17T05:37:30.241Z",
        "name": "James",
        "term": "Trans guy",
        "definition": "An AFAB (assigned female at birth; people thought they were a female at birth because of their sex) person who’s gender identity is male. This person may transition (change their name and/or pronouns, get HRT, get surgeries, or anything else or any mix of these OR none of the listed) to feel more comfortable.\n\nA trans guy may have gender dysphoria (when presenting as female)/gender euphoria (when presenting as male), which is the extreme discomfort of having to pretend to be the wrong gender/the good feeling of not having to pretend to be the wrong gender. Of course not all trans guys have this.\nI am a trans guy and it basically just means that my gender doesn’t match what everyone else’s thought I was when I was born. I have gender dysphoria so I’m trying to transition so I have a binder, new name, new pronouns, etc. so I can feel a bit better but I can’t get hormones yet :(\n\nIn general it feels nice to have a label for it (which is why I like the idea of this website) because I thought it was normal to have a longing to be a guy. I’ve wanted it very desperately since puberty started. If I hadn’t figured out what being trans was id probably still be confused!\n\nFor me being trans is a lot like having a broken bone; you don’t really notice your bones until they are broken. It’s hard to describe the feeling of gender dysphoria unless you’ve experienced it so I hope my definition is ok",
        "identity": "I’m a white Canadian 16 year old trans guy.",
        "sort-as": ["trans", "trans guy", "trans man", "transgender", "trans men", "transgender men", "transgender man", "transgender guy"]
    },
    {
        "time_submitted": "2018-04-17T06:39:16.293Z",
        "term": "proxvir",
        "definition": "A gender that is neither male nor female, but is related to male.\nPersonally, I’m neither/nonbinary, but have some masculine traits and think of myself as a boy or man in certain situations.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T06:41:55.346Z",
        "name": "Fy",
        "term": "nblnb",
        "definition": "Anyone who is `non-binary` and attracted to other non-binary people",
        "identity": "Genderfluid Pansexual",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:08:59.182Z",
        "term": "DFAB",
        "definition": "An acronym standing for \"designated female at birth\". Synonym of `AFAB.`",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:20:11.443Z",
        "term": "Quoiromantic",
        "definition": "Unable to distinguish between romantic and platonic attraction, or that those categories are not applicable. An aromantic spectrum identity.\nI don't find it helpful to categorize my relationships as romantic vs. platonic. The definition of \"romantic attraction\" is so subjective as to be practically meaningless - specific actions like cuddling or spending time alone together aren't always and inherently romantic, what makes them romantic is the underlying ~feeling~. Since I can't tell if I get that ~feeling~ at all, it's more helpful for me to define my relationships on a more case by case basis, in terms of level of closeness, commitment, types of physical intimacy, etc. I often have moments of \"aaah is this a crush or a squish\" when figuring out I like someone, but I've started embracing that grey area more.",
        "identity": "Quoiromantic, asexual, polyamorous, non-binary (androgyne), sapphic, white, american northwest, 18",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:30:58.074Z",
        "term": "Squish",
        "definition": "Like a crush but platonic - really wanting to be someone's friend.\nThere are some people I meet where I get this sense of \"wow they're so cool! I wish I were their friend!\". Sometimes I smile when I think about them, or I just really wish I could hug them.",
        "identity": "quoiromantic, asexual, polyamorous, non-binary (androgyne), sapphic, white, american northwest, 18",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:31:12.252Z",
        "term": "Stud",
        "definition": "Similar to `butch`, stud is primarily used in black lesbian/bisexual communities to refer to a dominant, masculine-presenting woman whose style is typically influenced by urban and hip-hop fashion.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:45:38.287Z",
        "term": "febfem",
        "definition": "Short for \"female-exclusive bisexual female\". While it technically means a bisexual woman who only dates other women, in practice it's almost exclusively used by transphobes (specifically `TERFs`) to mean a bisexual woman who will only date `cis` women and `trans` men.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:50:30.385Z",
        "name": "Aaron",
        "term": "Biromantic",
        "definition": "Somebody of any gender who is attracted to two genders. Does not strictly mean an attraction to females and males, but does in most cases.",
        "identity": "Biromantic grey-ace/pansexual demiboy",
        "sort-as": ["bi", "biromantic"]
    },
    {
        "time_submitted": "2018-04-16T21:03:27.888Z",
        "name": "Sarah",
        "term": "Compulsory Heterosexuality",
        "definition": "Compulsory Heterosexuality refers exclusively to a Lesbian-exclusive experience of ingrained false attraction to men,  including wanting attention and validation from men. All of this is rooted exclusively in social conditioning and not in legitimate attraction or desire. This is distinct from Coercive Heteronormativity, which is experienced by Lesbians, bisexuals, gays, queer people, and all sorts of not-straight people, which refers to the general coercive societal forces pushing everybody towards heterosexuality that often manifests in not recognizing same-sex attraction or experiencing false conditioned attraction.\nThese two things are very closely interlinked, and can both manifest in the same way (e.g. gay boys having childhood crushes on girls, bi women not realizing they love women until they're much older). But Compulsory Heterosexuality is a uniquely Lesbian experience because of the specific combination of gender and orientation, the context of being raised from birth expected to center their lives, emotions, and desires around men and, while not experiencing real attraction to men, being so deeply conditioned to ignore their own feelings in favor of men's desires that they believe themselves attracted to men.",
        "identity": "white, Southern California, 28, Bisexual woman",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T11:41:09.998Z",
        "term": "Queer",
        "definition": "Queer, to me, is an umbrella term, or could be used to describe one's specific sexuality and/or gender identity. For example, I find my sexuality to not really fit into a label comfortably, so I say that I'm queer. It's a non-specific term that's inclusive and helpful for those who are questioning or don't like any current labels.",
        "identity": "I'm white-passing, queer, a trans man, a minor, and a member of the cult of Santa Mierda.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:20:46.839Z",
        "term": "Relationship Anarchy",
        "definition": "It’s a type of polyamory with a focus on relationships with community-centric values, not couple-centric values. A political movement that offers an alternative to the capitalist hetero-patriarchy’s commodification of bodies, sex, and love and to the idea of amatonormativity. It’s about valuing relationships as you choose to, not based on imposed structures. It’s about each person following their own path, and coming together based on mutual desires, not duty and obligation. It means not separating partners from friends. In other words, it’s about relating to other human beings without coercive authority in play and without hierarchy in your group of relationships or in any relationship itself. \nAs someone who is aromantic this is extremely important to me. I don't experience romantic love, so how do I decide which relationships I \"need\" to place before my friendships? When you start to think about it, it all breaks down. Romantic relationships are a social construct. There's no reason to place them before your friendships. As someone who is into polyamory, there is no alternative way for me to ethically approach how to organize the relationships in my life. Every single connection is important to me because, at their base, they all are derived from friendship.",
        "identity": "Neptunian, Demigrey-polysexual, Aromantic, Polyamorous",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T07:56:50.048Z",
        "term": "TERF",
        "definition": "Trans-Exclusionary Radical Feminist. Created in 2008 to refer to transphobic radical feminists who don't believe `trans women` are women or experience misogyny and usually claim that `trans men` are victims of internalized misogyny. They regularly harass trans people in the name of \"helping women\", and many prominent TERFs have teamed up with far-right organizations just to harm trans communities, yet somehow they still believe this term is a slur.",
        "sort-as": ["trans-exclusionary radical feminist", "trans exclusionary radical feminist"]
    },
    {
        "time_submitted": "2018-04-17T08:10:50.510Z",
        "term": "butch",
        "definition": "a masculine-presenting lesbian or bisexual woman",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T08:13:29.743Z",
        "term": "femme",
        "definition": "A feminine `lesbian` or `bisexual` woman.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T08:17:39.074Z",
        "term": "pillow princess",
        "definition": "A woman who will let another woman go down on her but refuses to reciprocate. Named after the fact their head is always on the pillow. Usually derogatory.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T10:37:14.248Z",
        "name": "sam",
        "term": "trans",
        "definition": "identifying as a gender different from what you were assigned at birth",
        "identity": "swedish 16 y/o enby",
        "sort-as": ["transgender", "trans", "trans*"]
    },
    {
        "time_submitted": "2018-04-17T14:24:47.635Z",
        "name": "Nova",
        "term": "nblnb",
        "definition": "A `nonbinary` person attracted to other nonbinary people in a sexual or romantic or alterous way. \nI am nblnb! I look at cute nonbinary people and my heart practically melts they are so CUTE!",
        "identity": "Agender, asexual, transfeminine, demiromantic, nblnb, autistic, mentally ill, system/DID",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T14:31:16.938Z",
        "term": "bisexual",
        "definition": "Feeling attraction to both different and similar genders",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-04-17T14:33:11.244Z",
        "name": "Nova",
        "term": "afab/amab/agab",
        "definition": "AFAB: Assigned Female At Birth\nAMAB: Assigned Male At Birth\nAGAB: Assigned Gender At Birth (ex. my AGAB is male but I am `agender`)\n\nThis is used to describe the birth sex of a `trans`/`nonbinary` person, equivalent to \"biologically male/female,\" without inferring that their gender is related to their sex. \nI'm trans myself and so I may use this online to show problems I face with transition and such",
        "identity": "Agender asexual transfeminine demiromantic nblnb autistic",
        "sort-as": ["afab", "amab", "agab", "afab/amab/agab"]
    },
    {
        "time_submitted": "2018-04-17T16:04:35.975Z",
        "term": "Dfab",
        "definition": "Designated female at birth",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:05:57.077Z",
        "term": "Solarian",
        "definition": "A `non-binary` person who considers themself male-aligned",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:10:16.347Z",
        "term": "Maverique",
        "definition": "A `nonbinary` gender that’s neither male nor female, neither maculine nor feminine, but also not nothing. One way to explain it if you think of male and blue and female as pink, maverique would be yellow.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:12:57.871Z",
        "term": "Trans butch",
        "definition": "A `transgender` `lesbian` woman who identifies as `butch`",
        "sort-as": ["transgender butch", "trans butch"]
    },
    {
        "time_submitted": "2018-04-17T16:13:45.999Z",
        "term": "Compulsory heterosexuality",
        "definition": "Made famous by Adrienne Rich in her essay \"Compulsory Heterosexuality and Lesbian Existence\" the term is defined as: the cultural assumption that both males and females are predisposed to heterosexuality and the assumption that biology excludes a naturalized explanation for homosexuality. Further it is the assumption that women and men are innately attracted to each other emotionally and sexually and that heterosexuality is normal and universal. This institutionalization of heterosexuality in our society leads to an institutionalized inequality of power not only between heterosexuals and non-heterosexuals, but also between men and women, and a patriarchal society structured by compulsory heterosexuality where women are exploited (sexual slavery i.e. because there is no choice). It is built on 8 pillers: 1) the denial of women's own sexuality 2) the forcing of male sexuality upon women 3) the command and exploitation of female labor for male gain 4) the robbing of women of their children (fathers-right laws) to ensure compliance 5) the physical binding of woman to men to ensure compliance 6) the use and view of women as objects for male use 7) the suppression of woman's creativeness and expression of self and 8) the withhold women from education, knowledge and culture. Therefore the breaking away from this, the very act of rejecting men and male access to women and the centering of women in your life is an active choice to engage the lesbian experience. \n\nIt must be noted that Adrienne Rich was a trans-exclusionary feminist and contributed to the writing of \"The Transexual Empire\" and the acknowledgments of which state \"Adrienne Rich has been a very special friend and critic. She has read the manuscript through all its stages and provided resources, creative criticism, and constant encouragement.” I must be stated then that the term 'compulsory heterosexuality' though an important historical term for the lesbian community, is, in its very nature, trans-exclusive and does not extend to the experiences of trans women. \nThe act of rejecting men from all aspects of life is one that is an active struggle, not a passive one. The centering of men in society is so prominent that it must be forcefully over come constantly every day.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:14:07.134Z",
        "term": "Grey asexual",
        "definition": "Someone who mostly doesn’t experience sexual attraction and is asexual but on rare instances they will feel sexual attraction.",
        "sort-as": ["grey ace", "gray ace", "gray asexual", "grey asexual"]
    },
    {
        "time_submitted": "2018-04-17T16:15:43.060Z",
        "term": "dfab",
        "definition": "Designated female at birth, aka born with genitalia within the range of 'female'. \nTo me, a dfab person, it is a simple way to clear up miscommunication between original label and actual identity, albeit an intrusive one which shouldn't be used too casually.",
        "identity": "White, middle class, nonbinary, bisexual, aromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:17:42.441Z",
        "term": "lesbian existence",
        "definition": "The lesbian existence is defined by Adrienne Rich as a profoundly female experience similar to that of motherhood. It comes with its own struggles, oppressions, and meanings and stands against the term gay which only serves to blur the lines that are critical for `lesbian`s to discern in their very existence. Lesbian experience is centering woman in your life in every way, in every aspect, and, in such, rejecting maleness and men from these experiences which are exclusively womanhood. \nAnyone who chooses to center woman in their lives, in every way, is choosing a lesbian existance. It is a term to bring together all women in choosing to center and celebrate their womenhood together.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:18:58.982Z",
        "term": "Arospec",
        "definition": "A spectrum which encompasses romantic orientations between completely alloromantic and completely `aromantic`, an example being `demi` or `quoiromantic`. \nI am somewhere on the aromantic spectrum- I really don't know where just yet. However, even though it is easier to not mention it at all because most people don't (or aren't willing to try and) understand, around people who know about it, it's a good way for me to describe how I feel without going into all the rambling details.",
        "identity": "A white, nonbinary arospec teen",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:25:09.186Z",
        "term": "Agab",
        "definition": "Assigned gender at birth",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:28:08.912Z",
        "term": "Nblm",
        "definition": "Nonbinary loving men. A `nonbinary` individual who feels romantic and/or sexual attraction to men.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:29:05.436Z",
        "term": "Nblnb",
        "definition": "Nonbinary loving nonbinary. A `nonbinary` person who feels romantic and/or sexual attraction to other nonbinary people",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T16:31:52.873Z",
        "term": "M-spec",
        "definition": "Multi-attraction spectrum. A broad categorical term used to describe invididuals who are attracted to more than one gender. This term can encompass `bi`, `Pan`, `poly` people and many other identities.",
        "sort-as": ["mspec", "m spec", "m-spec"]
    },
    {
        "time_submitted": "2018-04-17T16:48:48.758Z",
        "name": "Vitor",
        "term": "Maverique",
        "definition": "A gender identity that exists separately from common conceptions of gender; male, female, neutral and androgynous. It is defined by independence of the other genders and conviction in its own existence, like saying, \"Hey, I'm here, I'm real, I'm unique\". \nIt was one of the first `nonbinary` gender identities I heard of. And even though I knew from beginning it wasn't my gender, it showed me how fascinating a gender can be, and how awesome is gender diversity.",
        "identity": "A person.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T17:13:30.819Z",
        "name": "Tath",
        "term": "nonvirmina",
        "definition": "An identity which is both very masculine and feminine, but that isn't male or female at all. Nonvirmina can be used as a masculine and feminine gender on its own, or can be used to describe another gender identity (as in, someone can identify as `egogender` and nonvirmina and mean that it's because, while they have a very personal gender, that gender is also very masculine and feminine without being male or female at all). \nBoth masculinity and femininity are an integral part of my gender experience, but I can't relate to being male or female, and I also don't want to be called either of those.",
        "identity": "gaúche, bi, aroflux, demisexual, nonvirmina, over 20",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T17:14:01.421Z",
        "term": "Viramoric",
        "definition": "Viramoric is a term for `nonbinary` individuals who are attracted to men. It is meant to be an alternative for existing attraction terms such as \"`gay`\" or \"`straight`\" for people who are neither.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T17:15:24.116Z",
        "term": "Feminamoric",
        "definition": "Feminamoric is a term for `nonbinary` individuals who are attracted to men. It is meant to be an alternative for existing attraction terms such as \"`gay`\" or \"`straight`\" for people who are neither. It is a subset of `diamoric` identities and the equivalent for attraction to men is `viramoric`.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T17:23:26.823Z",
        "name": "Oliver",
        "term": "esogender",
        "definition": "the feeling that even though you only have one gender, how you relate to that gender can change over time. \nFor example, a proxvir person may feel like how they relate to masculinity may change but they always identify as `proxvir`, or a `demigirl` who may feel like they are 75% a girl on somedays but only 25% on other days.\n\nIt can also be used for people who are not quite sure what their gender is, but do feel that they have one gender identity even though how they relate to that identity may change.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T17:26:58.778Z",
        "name": "Oliver",
        "term": "esomorphous",
        "definition": "The feeling that even though you only have one gender, how you relate to that gender can change over time. It differs in usage from `esogender` in that esogender is a gender identity in it's own right, and may be used if an individual doesn't have any other label for for their experiences. Esomorphous is supposed to be more general, and anyone can use it to describe their experiences with gender-not just `trans` people. \nThe main difference is that with `genderflux`, the intensity of how you feel a certain gender is what changes. Somebody who is esomorphous still feels the same “amount” of the gender that they identify is, though how they relate in other ways may differ. \n\nFor example, I am always 100% proxvir- the intensity of that changes. For me personally, I feel like I’m “moving around” within the definition of my gender- since proxvir just means “a gender that relates to masculinity”, that could mean that somedays I feel more masculine than others, or somedays my relation to masculinity changes but I may feel more `agender` one day and more `neutrois` the next.\n",
        "identity": "Proxvir",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T17:28:16.098Z",
        "name": "Oliver",
        "term": "proxvir",
        "definition": "a gender that is related to masculinity, but is separate from \"man\" or \"boy\".",
        "identity": "proxvir",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T18:08:19.741Z",
        "term": "Genderfae",
        "definition": "A fluid gender that never encompasses being masculine.",
        "identity": " Genderfae panromantic ace",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T18:09:45.926Z",
        "name": "Unaligned-nblm",
        "term": "Nblm",
        "definition": "A `nonbinary` person who loves men and encompasses all nonbinary attraction to men. An orientation that is neither straight nor gay. \nThis term was coined for nonbinary people who feel that terms like gay/`mlm` were forcing them to identify with a binary gender. For me this term isnt just a celebration not only of my attention to men but it's a celebration of how my nonbinary gender relates to my love for men",
        "identity": "nblm nonbinary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T18:10:10.268Z",
        "term": "Faesari",
        "definition": "A gender identity where one feels most comfortable within the gender neutral spectrum, but still feels a strong attachment to femininity.",
        "identity": "Genderfae panromantic ace",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T18:16:43.486Z",
        "name": "Unaligned-nblm",
        "term": "mlnb",
        "definition": "\"Men loving nonbinary\" aka: men who love/are attracted to `nonbinary` people. \nA term for any man attracted to me/that I date. A term that validates both my gender identity and their attraction to me, not despite my gender, but because of it.",
        "identity": "Nblm nonbinary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T19:16:41.800Z",
        "term": "Maverique",
        "definition": "A distinct gender outside of male and female. It is not in between male and female, it is not a mixture of male and female and it is not neutral.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T19:20:32.657Z",
        "term": "dfab",
        "definition": "An acronym standing for \"designated female at birth\". It means someone who, when a doctor looked at them after being born, had \"female\" put on their birth certificate.",
        "identity": "I am dfab",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T19:59:58.290Z",
        "term": "Solarian",
        "definition": "A `nonbinary` person who is aligned with manhood/masculinity/maleness but is not male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T20:01:08.985Z",
        "term": "Grey asexual (or greysexual)",
        "definition": "Someone who rarely feels sexual attraction, or feels very little sexual attraction.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T20:10:07.391Z",
        "term": "Aroflux",
        "definition": "Someone who's levels of romantic attraction fluctuates. They may feel a little attraction one day, no attraction another day, and a lot of attraction a different day.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T20:11:15.919Z",
        "term": "Polyamory",
        "definition": "The desire or capacity to have multiple consensual romantic relationships at once.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T20:12:50.812Z",
        "term": "Quoiromantic",
        "definition": "Someone who cannot distinguish between romantic and platonic attraction, or someone who cannot identify what romantic attraction feels like.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T20:20:22.857Z",
        "term": "Genderfuck/genderpunk",
        "definition": "A `nonbinary` person who radically and completely rejects the gender binary.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T20:21:58.669Z",
        "name": "Neo",
        "term": "Genderfluid",
        "definition": "Genderfluid is when your gender identity changes. Based on activities your doing or maybe based on nothing!",
        "identity": "Genderfluid",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T21:43:25.191Z",
        "name": "Keam",
        "term": "Chaoti - gender/girl/boy",
        "definition": "It is a term for people who believes that their ADHD affects their gender identity in any way. \nFor me, it is a logical conclusion, an explanation of the diffrence vetween mine and other people's experince. My gender is unclear for me - but for a reason, unlike gendervague people who may simply experince their gender is not clear. If I did not have ADHD, I wouldn't feel this way about my gender.",
        "identity": "18 y/o, chaotigender person from Sweden",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T21:46:02.498Z",
        "name": "mabanglo",
        "term": "maverique",
        "definition": "a gender identity independent from and directly rejecting the gender binary and the roles assigned by it",
        "identity": "pinoy genderfluid kid in college",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-17T22:45:38.466Z",
        "name": "Gina",
        "term": "Cupiosexual",
        "definition": "Wanting a sexual relationship but not having any sexual attraction. \nIt means being `asexual` but wanting sex. So people that use this term sometimes just go by `ace`",
        "identity": "I’m non bianary, gay(nblw),and ace (cupio)",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T00:33:01.442Z",
        "name": "Raphael",
        "term": "quoiromantic",
        "definition": "A romantic identity in which one is unable to distinguish between romantic and platonic interest/attraction/love.",
        "explanation": "I fall in love with all of my friends but I'm not sure if maybe I just feel really strongly about them.",
        "identity": "Quoiromantic, heterosexual, transgender male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T00:33:39.651Z",
        "term": "dfab",
        "definition": "Designated Female at Birth\n\nRefers to someone who's assigned gender (and thus, the one initially put on their birth certificate) was female. Someone who is DFAB and a man is called a `trans man`.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T00:58:31.632Z",
        "name": "leoneregina.tumblr.com",
        "term": "Lesbian Jesus",
        "definition": "A nickname given to Hayley Kiyoko by her fans",
        "explanation": "Lesbian Jesus saved my 20gayteen and blessed us all with her first full length album, Expectations.",
        "identity": "18 y/o lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T00:59:46.005Z",
        "term": "Lesbian Jesus",
        "definition": "Hayley Kiyoko, savior of the gays",
        "explanation": "She has represented lesbian relationships in her music videos and they are very accurate. They do not over sexualize girl on girl action or present them in a stereotipical way.",
        "identity": "Latina, 19, ciswoman, lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:02:01.411Z",
        "term": "Binder or Chest Binder",
        "definition": "Clothing item that can be used by a person to give the apperance of smaller breasts or a flatter chest.",
        "explanation": "I have never used a binder but i do not feel comfortable with my breasts so i have considered using one",
        "identity": "Latina, 19, ciswoman, lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:06:54.166Z",
        "name": "Mady",
        "term": "lipstick lesbians",
        "definition": "a `lesbian` who is attracted to feminine women",
        "identity": "lesbian, ohio",
        "sort-as": ["lipstick lesbian"]
    },
    {
        "time_submitted": "2018-04-18T01:13:06.684Z",
        "name": "Galexy",
        "term": "Gai",
        "definition": "Gay, but in a `non-binary` way.",
        "identity": "Gai and Pomogender and Aspec",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:13:49.106Z",
        "name": "Sequoia",
        "term": "Strayt",
        "definition": "Straight, but in a `nonbinary` way",
        "identity": "Strayt, Nonbinary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:15:58.032Z",
        "term": "Gai",
        "definition": "Experiencing attraction in a `nonbinary` way. Gai is neither straight nor gay, it is the attraction experience by a nonbinary person towards anyone (no matter the gender of the person they are attracted to). Ex: I saw the most gorgeous woman today!! I'm so gai for her!",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:26:33.061Z",
        "name": "Sarah",
        "term": "qwoc",
        "definition": "An acronym for queer women of color. Women of color who identify themselves as `queer`.",
        "explanation": "This term creates a family for non-white LGBT+ women who have often experience racial discrimination within the LGBT+ community from their white counterparts.",
        "identity": "26, black lesbian in the American Midwest",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:36:36.417Z",
        "name": "@gladosscience",
        "term": "Lesbian Jesus",
        "definition": "Hayley Kiyoko",
        "explanation": "https://www.youtube.com/watch?v=qa9POrJw6wk --see 00:02:31 and on for reference",
        "identity": "lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:50:40.015Z",
        "term": "Aspec",
        "definition": "Short for aspectrum, meaning someone who is on the `aromantic` and/or `asexual` spectra",
        "identity": "Demisexual",
        "sort-as": ["a-spec", "a spec"]
    },
    {
        "time_submitted": "2018-04-18T01:53:00.690Z",
        "term": "Binder",
        "definition": "Short-hand for chest binder. It's an article of clothing that is used to compress a `trans` person's chest in order to be perceived as not having breasts.",
        "identity": "Trans nonbinary",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:58:07.168Z",
        "term": "Sapiosexual",
        "definition": "A term created by straight men on Reddit meaning \"attraction to intelligence\". This term is typically considered ableist and is not accepted by the majority of the LGBTQ+ community.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T01:55:46.465Z",
        "term": "Gai",
        "definition": "An alternative to \"gay\" to be used specifically by `nonbinary`/`genderqueer` people, it expresses that a nonbinary person's attraction is not straight or hetero but is meant to avoid the controversy that may arise from using \"gay\" to describe attraction that is not \"same gender\".",
        "identity": "Nonbinary queer",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:00:40.086Z",
        "term": "Lithromantic",
        "definition": "Someone who experiences romantic attraction but does not wish to have it reciprocated, OR someone who experiences romantic attraction but loses the attraction once the feelings are reciprocated.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:03:26.072Z",
        "term": "Genderfaun",
        "definition": "Someone with a fluid gender that is never feminine, female, or female aligned. The person may or may not be able to identify their genders further.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:04:55.078Z",
        "term": "Finromantic",
        "definition": "Romantic attraction to those with feminine genders.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:05:52.905Z",
        "term": "Aqueerplatonic",
        "definition": "Someone who doesn't experience `queerplatonic` attraction.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:30:08.488Z",
        "name": "Alecz",
        "term": "DFAB",
        "definition": "Designated female at birth. The case where female was assigned on your birth certificate. See 'afab/amab'",
        "identity": "Queer nonbinary male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:35:11.801Z",
        "name": "Alecz",
        "term": "Binder",
        "definition": "A binder is an article of clothing many nonbinary or trans `afab` people wear to reduce visibility of their breasts, to create an illusion of a flat chest.",
        "identity": "Queer nonbinary male",
        "sort-as": ["chest binder"]
    },
    {
        "time_submitted": "2018-04-18T02:39:08.628Z",
        "name": "Alecz",
        "term": "Enbyfriend",
        "definition": "Gender neutral term for a romantic partner, similar to boyfriend/girlfriend.",
        "identity": "Queer nonbinary male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:44:50.195Z",
        "name": "Alecz",
        "term": "Lipstick lesbian",
        "definition": "A very `femme` lesbian; a female-aligned person who presents extremely femininely.",
        "identity": "Queer nonbinary male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:47:54.333Z",
        "name": "Alecz",
        "term": "Intersex",
        "definition": "A person born with both male and female reproductive organs. Not necessarily visibly born differently, as the \"different\" organs may be internal.",
        "identity": "Queer nonbinary male",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:52:19.757Z",
        "name": "Alecz",
        "term": "Camab/Cafab",
        "definition": "Coercively assigned (male/female) at birth. A term used with `intersex` people who was medically forced into a binary gender/genitalia.",
        "identity": "Queer nonbinary male",
        "sort-as": ["camab", "cafab"]
    },
    {
        "time_submitted": "2018-04-18T02:57:02.110Z",
        "term": "Genderfaun",
        "definition": "Genderfaun is a form of genderfluidity that never encompasses feeling femininity. It can include male and any `nonbinary` gender, but never encompasses feeling female",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:57:53.696Z",
        "term": "Genderfae",
        "definition": "Genderfae is a form of genderfluidity that never encompasses feeling masculine.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T02:59:04.320Z",
        "term": "Neptunian",
        "definition": "A `nonbinary` gender that is linked to the void and fluctuates with softer celestial masculine energy.",
        "identity": "Neptunian Demigrey-polysexual aromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:03:25.632Z",
        "term": "Venusarian",
        "definition": "A `nonbinary` gender that is linked to the void and fluctuates with softer celestial femenine energy.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:03:49.887Z",
        "term": "Juparian",
        "definition": "A `nonbinary` gender that is linked to softer celestial masculine energy. It is never hyper masculine and it’s not male-aligned nonbinary, but instead is simply linked. Someone who is juparian can feel different amounts of masculine energy at different times.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:04:06.550Z",
        "term": "Lunettian",
        "definition": " A `nonbinary` gender that is linked to softer celestial feminine energy.It is never hyper feminine and it’s not female-aligned nonbinary, but instead is simply linked. Someone who is lunettian can feel different amounts of feminine energy at different times.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:04:19.371Z",
        "term": "Starfluid",
        "definition": "A form of genderfluid linked to either the energy or the aesthetics of space/stars. Someone who identifies as starfluid can be fluid towards any gender as the only consistentcy is the tie to stellar energy/aesthetics",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:04:34.995Z",
        "term": "Mercurian",
        "definition": "A `nonbinary` gender that is connected to a softer celestial energy. This energy can feel “gendered”, but is neither masculine or feminine. Someone who is Mercurian can also be “void” of gender itself.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:04:48.779Z",
        "term": "Saturnian",
        "definition": "A  `nonbinary` gender that is linked to both softer celestial masculine and femenine energy. Like the others it is not masculine/femenine aligned, simply linked. And the amount of energy one feels can vary and change.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:06:47.823Z",
        "term": "Femcat",
        "definition": "A gender that is denying the expectation that `non-binary` people can’t be feminine, that non-binary has no place for femininity. It’s being ‘feminine’ but challenging that femininity is linked to being a woman.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:07:25.880Z",
        "term": "Jackhound",
        "definition": "A gender or presentation that is denying the expectation that non-binary people shouldn’t be masculine, that non-binary is about achieving androgyny. It’s being ‘masculine’ but challenging that masculinity is linked to being a man.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:09:25.070Z",
        "term": "Cupiosexual",
        "definition": "Doesn't experience sexual attraction, but still desires a sexual relationship",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:09:44.668Z",
        "term": "Cupioromantic",
        "definition": "doesn't experience romantic attraction, but desires a romantic relationship",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T03:11:27.900Z",
        "term": "Greysexual",
        "definition": "Someone who experiences occasional and/or mild sexual attraction",
        "identity": "Neptunian, Demigrey-polysexual, Aromantic",
        "sort-as": ["grey asexual", "grey ace", "graysexual", "gray asexual", "gray ace"]
    },
    {
        "time_submitted": "2018-04-18T03:22:47.098Z",
        "term": "Alterous Attraction",
        "definition": "the desire to be emotionally intimate with that person, a desire that is wholly other than romantic and platonic. As in: “I’d be cool with dating this person but being their friend is just as good. Like I wouldn’t actively start a romantic relationship, but I wouldn’t turn one down.”",
        "explanation": "As someone who is aromantic, I experience alterous attraction so strongly. It's the feeling that I need to want to date someone. But I know it's not romantic because it doesn't hurt to not be in a relationship with them, to have my feelings not be returned.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T11:45:56.817Z",
        "name": "Sean",
        "term": "Pangender",
        "definition": "Pangender is a `non-binary` gender identity which refers to a vast and diverse multiplicity of genders in the same individual that can extend infinitely, always within the person's own culture and life experience. This gender experience can be either simultaneously or over time.",
        "sort-as": ["pan"]
    },
    {
        "time_submitted": "2018-04-18T14:45:56.812Z",
        "name": "Michel",
        "term": "gray-pansexual",
        "definition": "A person who may not always or not fully experience sexual attraction to other people but when they do — gender/sex doesn't matter to them.",
        "explanation": "For me it means I really rarely experience sexual attraction to people themselves, but I am sexually attracted to certain situations which can involve other people and also I am generally not against sex and can enjoy it.",
        "identity": "Non-binary, gray-pansexual",
        "sort-as": ["gray pansexual"]
    },
    {
        "time_submitted": "2018-04-18T14:51:18.644Z",
        "name": "Bones",
        "term": "Pansexual",
        "definition": "Attraction to someone regardless of their gender identity. You're attracted to their personality more than anything.",
        "explanation": "I'm pansexual and living life!",
        "identity": "Turkish / 18 / Nonbinary",
        "sort-as": ["pan", "pansexuality"]
    },
    {
        "time_submitted": "2018-04-18T14:52:22.343Z",
        "name": "Meez",
        "term": "Genderfluid",
        "definition": "Your gender fluctuates.  Sometimes in the same day, sometimes each day, sometimes a week later.  It isn't limited to just fluctuating between the binary genders (male/female), as it can involve one of any `non-binary` genders.  For example, someone can go between female and male, female and `agender`, female and male AND agender...",
        "explanation": "Some days I can wake up female and by noon be agender.  Sometimes out of the blue I'm male.  It just happens.",
        "identity": "30ish, southern US, genderfluid afab lesbian, disabled",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T14:54:38.408Z",
        "name": "perish op",
        "term": "Bear",
        "definition": "A gay man who is of hairy and large physica stature. Most bears present in a very masculine manner.",
        "explanation": "i'm big and gay and hairy. i'm not old enough to drink so i don't hang out in the sports bars w/ all the older bears but yea u get the picture.",
        "identity": "tired and gay",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T15:21:43.423Z",
        "name": "Lai",
        "term": "aspec",
        "definition": "A combined term for \"aromantic spectrum\" and \"asexual spectrum\". An umbrella term for the collective `ace` and `aro` community.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T15:21:58.743Z",
        "term": "From Trans",
        "definition": "from trans: a masculine gender that feels like its been auto-corrected by the phone of life (exclusive to `afab`)",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T18:22:04.755Z",
        "name": "Harley Black",
        "term": "Aromantic",
        "definition": "Someone who is aromantic is someone who goes not feel any romantic attraction. It can also be used as an umbrella for some people on the aromantic spectrum. Although aromantics do not experience romantic attraction, they may still engage in relationships that may or may not be of a romantic nature.",
        "explanation": "Being aromantic is a big part of my identity as a person, I never had much of a sense of self before discovering the term. For me it means I know I am not broken and it gives me a community. It means wholeness and love that is still love, just different than other peoples love.",
        "identity": "I identify as aromantic grey asexual.",
        "sort-as": ["aro", "aromantic", "aromanticism"]
    },
    {
        "time_submitted": "2018-04-18T18:41:11.512Z",
        "name": "GD",
        "term": "Bisexual",
        "definition": "being sexually attracted to two and/or more genders.",
        "identity": "I am a bisexual genderfluid white high school student",
        "sort-as": ["bi", "bisexual", "bisexuality"]
    },
    {
        "time_submitted": "2018-04-18T18:42:59.910Z",
        "name": "Chip",
        "term": "Autigender",
        "definition": "A term for when a person perceives that their experience of gender is influenced by their autism. For example if something about their gender is influenced by a special interest, a sensory experience, or a disconnect from neurotypical definitions of gender. Not usually used as someone's whole identity but a part of it, though some may use this as their only identifier. Not available for use by allistic (non-autistic) people.",
        "identity": "Nonbinary, queer/pan, androgynous, autistic, disabled",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T18:44:07.279Z",
        "name": "GD",
        "term": "aspec",
        "definition": "Identifying as somewhere on the spectrum of `asexuality`/`aromanticism`.",
        "explanation": "I've identified as `demisexual` in the past, which is a aspec sexuality. It's useful to me because I don't quite know why I experience sexual attraction differently from others but I know that I do.",
        "identity": "bisexual genderfluid white high school student",
        "sort-as": ["a-spec", "a spec"]
    },
    {
        "time_submitted": "2018-04-18T19:02:35.699Z",
        "term": "Queer Platonic Relationship / QPR",
        "definition": "A queer platonic relationship is a term created by the `aromantic` community to describe a relationship that is neither romantic nor platonic/ is stronger or different than a platonic relationship. The attraction people in the relationship feel for each other can be platonic, queer platonic (different than or stronger than platonic attraction) or `alterous attraction`.",
        "explanation": "To me, a queer platonic relationship is about being closer and more intimate than a friendship and the individuals are committed to each other without any romantic feelings or qualities. To me, it could be comparable to having a dating partner. I once wanted a queer platonic partner and I sought a qpr, but in more recent years I find myself not wanting or seeking one at all. I personally do not want much intimacy at all and instead I seek deep and true friendships to last a long time.",
        "identity": "Aromantic",
        "sort-as": ["queer platonic relationship", "qpr", "queer platonic", "queerplatonic"]
    },
    {
        "time_submitted": "2018-04-18T19:22:49.848Z",
        "name": "Chip",
        "term": "Gendervague",
        "definition": "Used by neurodivergent people to describe a lack of/vague sense of gender as it is affected by one's neurodivergence. For example may be affected by a mental disorder/condition that causes flat affect or alexithymia making it difficult to feel anything about one's gender beyond a vague sense of something undefinable.",
        "identity": "Nonbinary, pan/queer, autistic, disabled",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-18T19:25:30.071Z",
        "name": "Kerry C",
        "term": "aspec",
        "definition": "An umbrella term for the `asexual` and `aromantic` spectrums (a-, demi-, grey-, etc).",
        "explanation": "It is often used in discussions of experiences or issues that apply to both the asexual and aromantic communities.  It's also helpful for when one is certain they have an ace and/or aro identity, but isn't sure on what specific one it is yet.",
        "identity": "demi-bisexual aromantic",
        "sort-as": ["a-spec", "a spec"]
    },
    {
        "time_submitted": "2018-04-18T19:30:40.782Z",
        "term": "a-spec",
        "definition": "An encompassing term that includes the spectra of both `asexuality` and `aromanticism`. Can be narrowed to ace-spec (asexual spectrum) and aro-spec (aromantic spectrum) to indicate a specific group. The spectrum includes any identity that may fall under the asexual and aromantic umbrellas, including demi-, gray/grey-, cupio-, lith-, and so on.\nNot to be confused with Autism Spectrum Disorder, which uses \"the spectrum\" (without any other definers) or \"ASD\" as slang terminology.",
        "explanation": "i have identified as a-spec for about 4 years because it's easier, shorter, and more convenient for me to use to describe my orientation, as well as the ace and aro community at large, since it's an inclusive and all-encompassing term and doesn't leave any identities out.",
        "identity": "white, american, a-spec queer",
        "sort-as": ["a-spec", "a spec", "aspec"]
    },
    {
        "time_submitted": "2018-04-18T20:08:03.504Z",
        "name": "Harri",
        "term": "Asexual",
        "definition": "Not being sexually attracted to anybody, this does not exclude romance.",
        "identity": "14 year old pansexual from England <3",
        "sort-as": ["ace", "asexual", "asexuality"]
    },
    {
        "time_submitted": "2018-04-18T20:12:21.345Z",
        "name": "Harri",
        "term": "Tea",
        "definition": "A drink I have every day, at least twice.",
        "explanation": "100/10 would recommend",
        "identity": "Pansexual from England",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-19T00:06:41.075Z",
        "name": "Breck",
        "term": "Enbian",
        "definition": "The term enbian is used for someone who is `non-binary` and is attracted to/in a relationship with someone who also is non-binary",
        "identity": "I'm a 14 y/o non-binary lesbian.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-19T00:48:41.947Z",
        "name": "eri",
        "term": "sapiosexual",
        "definition": "Being attracted to a person only based on a display of intelligence, intellect, wisdom, understanding, knowledge, etc. In recent years, misunderstanding of its use has caused a backlash, citing the \"intelligence\" part as being ableist. However, the term has a bit more nuance than just being attracted to \"smart\" people, and mostly refers to passionate learning and sharing information about a favored topic(s), rather than strict book-learning, or academia.",
        "explanation": "I don't use the label in public because of the backlash/accusations of ableism, but for me I find that I am attracted to, say, someone who is passionate about planes, and will tell me all about their favorite planes and why those are their favorite planes, whether or not they were considered \"intelligent\" or \"high IQ\" or what have you.",
        "identity": "19, nonbinary, bisexual, quoiromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-19T00:50:01.625Z",
        "name": "eri",
        "term": "apothiromantic",
        "definition": "being on the `aromantic` spectrum and being romance repulsed",
        "identity": "19, nonbinary, quoiromantic/apothiromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-19T01:02:46.348Z",
        "term": "gai",
        "definition": "Orientation of a `nonbinary`/`genderqueer`/otherwise not-exclusively-male and not-exclusively-female person, who feels that while they are attracted to other people with similar (a) gender(s) to their own, they cannot accurately call this attraction \"gay\" for any given reason, often because there are so many varied experiences with nonbinary genders that they feel that two cannot accurately be called the same. In other words, gay but for nonbinary attraction.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-19T01:05:20.009Z",
        "term": "aspec",
        "definition": "being on the `asexual` spectrum, `aromantic` spectrum, or both.",
        "identity": "19, nonbinary, bisexual, quoiromantic",
        "sort-as": ["a-spec", "a spec"]
    },
    {
        "time_submitted": "2018-04-19T02:09:40.510Z",
        "name": "Raphael",
        "term": "a-spec",
        "definition": "A spectrum of sexualities that experience little to no sexual attraction or experience it differently than allosexual people. This includes asexual, `demisexual`, greysexual/`greyasexual`, and many others.",
        "sort-as": ["aspec", "a spec"]
    },
    {
        "time_submitted": "2018-04-19T02:13:49.344Z",
        "name": "Raphael",
        "term": "gatekeeping",
        "definition": "Trying to keep others out of a community with rules that not the whole community agrees on. E.g. some LGBT+ people saying `asexuality` is not LGBT+.",
        "identity": "Trans and bisexual",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-19T19:57:43.567Z",
        "name": "Alex",
        "term": "Genderfluid",
        "definition": "This term is used to refer to a person who's gender identity fluctuates (changes). Typically, a genderfluid goes through phases of Male, female, and the in between.",
        "identity": "genderfluid, pansexual, possibly asexual",
        "sort-as": ["genderfluidity"]
    },
    {
        "time_submitted": "2018-04-19T21:46:54.488Z",
        "term": "Xenogender",
        "definition": "Xenogender is an umbrella term within the `nonbinary` umbrella term, that refers to \"that cannot be contained by human understandings of gender; more concerned with crafting other methods of gender categorization and hierarchy such as those relating to animals, plants, or other creatures/things.\" My personal perspective on this in regards to my gender, as a xenogender person, is that due to the impacts of the gender binary on mine and others' perceptions, there are genders that exist outside the binary but are extremely difficult to put into language and explain due to how heavily the binary and binary perceptions have been ingrained into society. So the best way to conceptualize and explain my gender is through aesthetic terms and things I associate it with, since I don't feel that current language and binary perceptions can actually put my gender into words in a suitable manner.",
        "identity": "Xenogender, United States",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-20T02:52:08.509Z",
        "term": "Lesbian Jesus",
        "definition": "A nickname given to Hayley Kiyoko, a `lesbian` singer (she has explicitly identified herself as gay in interviews), due to the fact that she is very popular among lesbians and the fact that the majority of her music and music videos all center around her love for women, providing many lesbians (and other `wlw`) with a form of `sapphic` entertainment that is usually uncommon.",
        "identity": "Lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-20T02:57:37.867Z",
        "term": "Neutrois",
        "definition": "Neutrois is a gender that is neutral, or in some instances, a lack of gender. It is not defined by neutral pronouns or presentation, as anyone of any gender can have these things. Rather, it refers to a gender or someone who has a gender that is neutral. The term was originally coined in 1995 by H.A. Burnham, making it one of the earlier gender identities in the `nonbinary` community.",
        "identity": "Neutrois",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-20T03:17:30.611Z",
        "name": "Aegosexualmoments.tumblr.com",
        "term": "Aegosexual",
        "definition": "Sexual attraction that is not followed by the desire to engage in activities with another person. But may enjoy others enjoying the sensation.",
        "explanation": "Often accompanied by daydreaming behaviors and previous identification as `asexual`",
        "identity": "Female College Student",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-20T05:14:31.132Z",
        "name": "Perma",
        "term": "acoromantic",
        "definition": "Acoromantic means, that you feel lack in the romance department because of your negative aspects toward romance. You can eventually feel something for people, but overall you don't trust people because of these negative feelings and misconceptions.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-20T21:47:07.449Z",
        "term": "Aroflux",
        "definition": "Arofulx means your romantic orientation fluctuates, but remains on the `aromantic` spectrum.",
        "identity": "Asexual Aromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-21T04:33:43.206Z",
        "name": "sky",
        "term": "stellunarian",
        "definition": "A `nonbinary` gender from the galactian family (`solarian`, `lunarian`, `stellarian` etc) that denotes someone who feels some form of kinship with both woman/feminine-aligned and agender/non-aligned gender.  \"Stellunarian\" can denote someone who fluctuates between lunarian and stellarian, someone who experiences a connection to both at the same time, someone who feels in between the two, someone who feels demigendered, or any other combination.",
        "explanation": "Personally, I identify as mostly stellarian and think of myself as someone who doesn't have a gender, who is just \"me\".  But some aspects of my personality and presentation are on the more feminine side of the spectrum, I don't feel any connection to maleness or masculinity, and as an `AFAB` person my outer looks will almost always cause me to be grouped in with women, so I have a lot of the same experiences/exposure to oppression that women do.  For me \"stellunarian\" acknowledges that I may not be a woman, but I'm a non-gendered person who still has some things in common with women.",
        "identity": "USA, age 30, stellunarian nonbinary, asexual neptunic lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-21T11:39:43.097Z",
        "name": "Remi",
        "term": "Panromantic",
        "definition": "Available to be attracted to all genders in a romantic way yet not in a sexual way.",
        "explanation": "I've met a few panromantic people in my life and I'm still trying to come out as it to my family and friends.",
        "identity": "Genderfluid",
        "sort-as": ["pan", "panromantic", "panromanticism"]
    },
    {
        "time_submitted": "2018-04-21T18:24:53.709Z",
        "name": "Mere",
        "term": "girlflux",
        "definition": "A feminine subset of `genderflux`. Girlflux is to fluctuate between `girl` and `agender`, but may include other labels, such as `demigirl`. \nA good visual to imagine girlflux is a dimmer light switch. One end is girl, and the other is agender, but the middle would be demigirl or another gender.",
        "explanation": "I myself identify as girlflux, so letting other people know what it means is extremely important to me.",
        "identity": "Girlflux lesbian",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-22T16:37:15.312Z",
        "name": "Shadow",
        "term": "Masexual/romantic",
        "definition": "Sexual or romantic attraction to males or masculinity",
        "explanation": "Gives me the freedom to say I really enjoy guys and masculine presenting people,  including `nb`'s and some women",
        "identity": "Transmasculine asexual maromantic",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-22T19:26:21.142Z",
        "name": "Kate",
        "term": "Aroflux",
        "definition": "Aroflux is when you fluctuate between `aromantic` and alloromantic (experiencing romantic attraction), or between different areas of the aromantic spectrum.",
        "explanation": "I embody this term because I’m aroflux myself, and experience the above. I fluctuate between being aromantic and `sapphic` almost daily.",
        "identity": "aroflux ace",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-22T21:23:25.306Z",
        "name": "Alois",
        "term": "Queer",
        "definition": "A term that is used to define anyone who isn't `cisgender`, heteromantic, heterosexual, or perisex. Often used as an umbrella term specifically to describe people who identify as queer.",
        "explanation": "Some people do not align with this term or are uncomfortable with it, which is perfectly fine, but they are not allowed to declare that other people cannot identify as queer. Queer is an important word for some people, especially non-cis people who aren't gay or lesbian (ex. bisexuals, pansexuals, nonbinary people, asexuals, aromantics, and some people with identities too complicated to condense into one word). Anyone in the LGBTQIAPN+ community is welcome to call themselves queer if they are comfortable with it.",
        "identity": "Proud arospec queer (both in sexuality and gender) college student",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-22T21:25:27.728Z",
        "name": "Alois",
        "term": "Endogender",
        "definition": "Similar to genderflux, a fluctuating gender that always has at least partial feelings of a certain alignment. That alignment may be masculine (endoboy), feminine (endogirl) or nonaligned (endogender or endononbinary).",
        "identity": "Proud arospec queer (in both sexuality and in gender) college student",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-23T00:15:33.678Z",
        "name": "maxlikesbbroadway",
        "term": "Genderfae",
        "definition": "genderfae is a branch of genderfluid, which is basically your gender identity changes throughout time. genderfae is to change between gender identities (as genderfluid) but to never feel completely masculine.\nthat was probably really complicated.\nbasically genderfae is genderfluid but never feeling completely masculine.",
        "identity": "demigirl/genderfae, but iM gAy (i'm basically just lesbian -i use she/they. i'm 14",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-23T00:22:11.731Z",
        "name": "maxlikesbbroadway",
        "term": "demigirl",
        "definition": "identifying as female, but not completely \n//\na gender that is close to/related to female but somewhat different/in between.",
        "identity": "genderfae/demigirl. lesbian. 14",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-23T17:52:23.613Z",
        "name": "Kwame-Marie Tillmxn",
        "term": "Afrogender",
        "definition": "A gender identity (also afroboy, afrogirl and afroenby) influenced by the experiences of the Afrikan people/diaspora. For use by Black people only.",
        "identity": "Black/Mvskoki Afroindigenous nonbinary femme and radical femmeinist/womxnist",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-23T18:02:49.762Z",
        "term": "Otter",
        "definition": "A gay man who is very hairy all over his body, but is smaller in frame and weighs considerably less than a bear",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-23T20:37:53.987Z",
        "term": "minromantic",
        "definition": "Exclusively experiencing romantic attraction to people who are masculine in some way, regardless of their gender identity.  For example, one could be attracted to a masculine presenting agender person, but not a feminine presenting one, etc.",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-24T00:57:11.813Z",
        "name": "robin",
        "term": "demifluid",
        "definition": "having a fluid gender between demigenders. to put it more simply, it's genderfluid but never 100% male or female. it's everything in between the two binary genders.",
        "explanation": "it's my gender identity! it's who i am and i often just call myself genderfluid for easier understanding, but i hope for more people to understand and know the term demifluid.",
        "identity": "white, 18, demifluid, bisexual",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-24T01:08:55.659Z",
        "name": "Devin XXX",
        "term": "Demiflux",
        "definition": "Demiflux means that part of the person's gender is fluid, and the rest of it being static (as in, one part demiboy and other parts fluctuating). It's very similar to demigender because like it, it has two parts, but the difference is that one part fluctuates.\nIt could also mean that the intensity of the person's demigender identity fluctuates. For example, the same demiboy might fluctuate between full demiboy and agender, and anywhere in between. This term means diffrent things for diffrent people. If you know or meet a demiflux person, you may consider asking them what the term means for them.",
        "identity": "White lesbian demiflux nonbinary human being",
        "sort-as": []
    },
    {
        "time_submitted": "2018-04-24T01:09:36.343Z",
        "name": "Andy",
        "term": "Kingender",
        "definition": "Feeling that your gender is effected by your kintype(s). “Kin” can be replaced, for ex, Demongender, Dragongender, etc.",
        "sort-as": []
    }
];

allCurlsFromEntries(defswithsort);
