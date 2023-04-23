# EZ-CSS library


## Kort om EZ-CSS
EZ-CSS är ett lightweight CSS-bibliotek och ett sätt att tänka när det kommer att strukturera och bygga upp sina sajter.
Färdigt bibliotek med klasser för att slippa återupprepa sin css för de mest återkommande sakerna och rows/grid (tänk bootstrap).
Ett tänk när det kommer till att strukturera sin sajt i sektioner och containers som gör det lättare att få en webb att hålla ihop!


## Innehåll

### EZ-Containers.
- Sections
- Content-containers
- Text-block

### EZ-Grid.
- Rows/Cols

### EZ-Spacing.
- Margin/Padding

### EZ-Mediaqueries.
- How to be responsive

### EZ-Utilites.
- Flex-related (justify, align, col/row)
- Text-align
- Display/Hide
- Positioning (standard absolutes/relative)
- Imagery (bg, figure ratios, fits, contains)


<br><br><br>


# EZ-Containers (Sections, Content-containers, Text-block)
EZ-Containers är det mest grundläggande för att börja bygga sin sajt-struktur.

- <strong>Sectionen</strong>  är huvudcontainern för nytt innehåll. Sectionens roll är vertikal-padding (hur mycket space mellan sektionerna), om den ska ha bakgrundsbild, eller bakgrundsfärg eller något annat som ska gälla för hela sektionen.
<i>Det som följer med som standard i EZ är section class="standard", den innehåller en standard padding vertikalt för att skapa space. Behövs en sektionstyp med bakgrundsbild? gradient-bg? lägg till dessa variations-klasser.</i>

- <strong>Content-containers</strong> (content-standard, content-wide etc.) är det första som kommer inuti en sektion. Den styr hur brett innehållet ska gå i sektionen. Ska innehållet ta upp hela skärmbredden? Content-full. Ska innehållet gå till en viss bred som verkar vara det som är mest standard enligt skiss? content-standard. <strong>Bredderna för de olika containrarna styrs av skissen och behöver settas till varje projekt.</strong>

- <strong>Text-block</strong> är den minsta containern och används inte alltid. Det är i princip en content-container fast med mindre mått. Då content-containrarna styr bredden på innehållet för hela sektionen så är text-blocksen mer till för de fall man i en bred-content vy vill ha ett text-block exempelvis som inte går hela vägen.
<br>

<strong>Kodexempel:</strong>
```
<section class="standard">
  <div class="content-standard">
    <div class="text-block-lg">
      <h1>Min rubrik</h1>
      <p>Lite till text</p>
    </div>
    <div class="article-list">
    </div>
  </div>
</section>
```
<br><br><br>

# EZ-Grid
EZ-Grid är i princip som bootstraps grid/row system fast med fler col-bredder (1-24 + auto, istället för 12)
Så en col-12 = 50%;

Att endast slänga ut en class="col" ger automatisk bredd beroende på hur många som ligger i rowen.
3 divar med class="col" i en row gör att alla blir 33,333333% breda.

<strong>Kodexempel:</strong>
```
<div class="row">
  <div class="col-10">Denna blir 10/24</div>
  <div class="col-14">Denna blir 14/24</div>
</div>
```

<br><br><br>

# EZ-Spacing
Ibland vill man bara EZ-fiera™ för sig själv och snabbt kunna sätta lite padding eller spacing på ett element.
Till detta har vi EZ-Spacing.

Så som klasserna styrs är enligt följande:
{p/m}-{riktning:optional}-{mängd-värde}

<strong>Riktningarna som finns är:</strong><br>
v - vertical<br>
h - horizontal<br>
t - top<br>
r - right<br>
b - bottom<br>
l - left<br>

<strong>Mängd-värdena som finns är följande</strong><br>
z (zero), 1, 2, 3, 4, 5, 6

I ez.scss (root-cssen för EZ) så finns det variabler för antal pixlar för dessa olika nivåer<br>
Som standard är det:

```
/* VARIABLES */
$spacing-xs: 5px; //1
$spacing-sm: 10px; //2
$spacing-md: 15px; //3
$spacing-lg: 20px; //4
$spacing-xl: 40px; //5
$spacing-xxl: 120px; //6
$spacing-z: 0px; //Z

```
Innehållet i dessa variabler får man ställa om individuellt för varje projekt (om det skulle behövas).

<strong>Kodexempel:</strong>
```
<div class="row">
  <div class="col-10 p-h-5">Denna kolumn får 40px horizontell padding</div>
  <div class="col-12 m-4">Denna kolumn får 20px margin runt hela</div>
</div>
```

<br><br><br>
# EZ-Mediaqueries
För att göra våra hemsidor responsiva så har vi vår uppsättning mediaquery-breakpoints.
Dessa mediaqueries nestlar vi direkt i vår css (med includes) för den komponenten och klass som behöver det.

Följande breakpoints för mediaqueries finns tillgängliga:
```
xl: 1740px;
lg: 1600px;
md: 1440px;
sm: 1200px; 
tablet: 992px; 
md-tablet: 870px;
sm-tablet: 767px; 
xl-phone: 680px;
lg-phone: 550px;
md-phone: 413px;
sm-phone: 374px; 
mini: 359px;
```

För att då exempelvis göra en förändring för brytpunkt 1140px så behöver vi använda den breakpoint som är närmast det värdet uppåt (i detta fall "sm").

<storng>Kodexempel:</strong>
```
.news-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 80px;

    @include sm {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .item {
       
    }
}

```
<br><br><br>
# EZ-Utilities
EZ-utilities är lite extra smått och gott som underlättar i många fall, färdiga klasser för saker som görs ofta, mindre modifikationer eller små färdiga element.

En hel del av de nedanstående fungerar med våra mediaquery-breakpoints.
Värt att notera att de i dessa klassnamn skrivs utan bindestreck.
Exempel: sm-tablet blir i nedan klassnamn smtablet, md-phone blir mdphone etc.

## Flex relaterat [Med inbyggda mediaqueries]
### Direction</strong>
<strong>Färdiga klasser för att sätta direction på sin flex-container</strong><br>
direction-row<br>
direction-row-reverse<br>
direction-column<br>
direction-column-reverse<br>

Fungerar med mediaqueries-breakpointsen<br>
direction-{breakpoint}-{value}

<strong>Kodexempel:</strong>
```
<div class="display-flex direction-row direction-tablet-column">
</div>
```

### Justify
<strong>Färdiga klasser för att justifya sin flex-container</strong><br>
justify-start<br>
justify-end<br>
justify-between<br>
justify-around<br>
justify-center<br>

Fungerar med mediaqueries-breakpointsen<br>
justify-{breakpoint}-{value}

<strong>Kodexempel:</strong>
```
<div class="display-flex justify-between justify-sm-around justify-mdphone-start">
</div>
```

### Align-items
<strong>Färdiga klasser för align-items</strong><br>
align-items-start<br>
align-items-end<br>
align-items-center<br>

Fungerar med mediaqueries-breakpointsen<br>
align-{breakpoint}-items-{value}

<strong>Kodexempel:</strong>
```
<div class="display-flex align-items-center align-xlphone-items-start">
</div>
```

## Text-aligns [inbyggda mediaqueries]
<strong>Utöver align-items till flex så har vi även färdiga klasser för text-aligns</strong><br>
align-left<br>
align-center<br>
aling-right<br>

Fungerar med mediaqueries-breakpointsen<br>
align-{breakpoint}-{value}

<strong>Kodexempel:</strong>
```
<div class="text-block-lg align-center align-sm-left">
</div>
```

## Displays/Hide [inbyggda mediaqueries]
<strong>Färdiga klasser för att sätta olika displays (hide / display: none)</strong><br>
display-flex<br>
display-inline-flex<br>
display-grid (useless so far)<br>
display-block<br>
display-inline<br>
<br>
hide
<br>
Fungerar med mediaqueries-breakpointsen<br>
display-{breakpoint}-{value}<br>
eller: <br>
hide-{breakpoint}

<strong>Kodexempel:</strong>
```
<div class="display-flex display-sm-block hide-xlphone">
</div>
```


## Position (relative, absolute (m. positions))
<strong>Färdiga klasser för att göra ett element relativt eller absolut, och de absoluta med färdiga positions (vanligt förekommande)</strong><br>
position-relative<br>
position-absolute<br>
position-absolute-center (helt centrerat vertikalt/horizontellt)<br>
position-absolute-top-left (top: 0; left: 0;)<br>
position-absolute-top-center (top: 0; left: 50%;)<br>
position-absolute-top-right (top: 0; right: 0:)<br>
position-absolute-bottom-left (bottom: 0; left: 0;)<br>
position-absolute-bottom-center (bottom: 0; left: 50%)<br>
position-absolute-bottom-right (bottom: 0; right: 0;)<br>

<strong>Kodexempel:</strong>
```
<div class="position-relative">
    <div class="position-absolute-top-right">
    </div>
</div>
```

## Imagery (Background, Figures, Object)
### Figures
<strong>Färdiga figures med ratios som håller sitt format responsivt, förhåller sig till containern de ligger i (100% av bredd)</strong><br>

- <strong>Circle</strong><br>
Skapar en cirkel, höjd 100% av bredd (containerns)

- <strong>Landscape</strong><br>
Skapar en liggande bild höjd 69% av bredd (Variabel $landscape-height finns att ställa om i ez.scss om så skulle behövas för ditt individuella projekt)

- <strong>Portrait</strong><br>
Skapar en stående bild höjd 120% av bredd (som standard) av bredd (Variabel $portrait-height finns att ställa om i ez.scss om så skulle behövas för ditt individuella projekt)

- <strong>Video</strong><br>
Skapar container med standard-video format, 56.25% av bredd.

- <strong>Square</strong><br>
Skapar en fyrkant, höjd 100% av bredd.

<strong>Kodexempel:</strong>
```
<figure class="circle">
    <img src="url-till-bild.jpg">
</figure>

<figure class="landscape">
    <img src="url-till-bild.jpg">
</figure>

<figure class="video">
    <video>
        <source src="video.mp4">
    </video>
</figure>
```

### Background (size, position, repeat)
<strong>Färdiga klasser för att sätta lite attribut till en sektion med bakgrundsbild</strong><br>
bg-size-contain<br>
bg-size-cover<br>
bg-position-center<br>
bg-position-top<br>
bg-position-right<br>
bg-position-bottom<br>
bg-position-left<br>
bg-repeat-no<br>
bg-repeat-x<br>
bg-repeat-y<br>

<strong>Kodexempel</strong>
```
<section class="bg-size-cover bg-position-center" style="background-image: url(bakgrundsbilden.jpg)">
</section>
```

### Object (fit, position)
<strong>Till img-taggar har vi också lite stödklasser</strong><br>
object-fit-contain<br>
object-fit-cover<br>
object-position-center<br>
object-position-top<br>
object-position-right<br>
object-position-bottom<br>
object-position-left<br>

<strong>Kodexempel:</strong>
```
<img src="bild.jpg" class="object-fit-cover object-position-center">
```


<br><br><br><br><br><br><hr>
##### Main authors
 <a href="https://github.com/NiclasV" target="_blank" style="color: #000; text-transform: uppercase;">Niclas Victorsson</a>, <a href="https://github.com/FadiGo" target="_blank" style="color: #000; text-transform: uppercase;">Fadi Gourie</a>
###### Contributors
Patrik Äppelkvist, Nicklas Boström
###### Spiritual Support
Claes Lövgren
