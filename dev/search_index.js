var documenterSearchIndex = {"docs":
[{"location":"jones/#Jones-Calculus","page":"Jones Calculus","title":"Jones Calculus","text":"","category":"section"},{"location":"jones/#Index","page":"Jones Calculus","title":"Index","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"","category":"page"},{"location":"jones/#Optical-Beams","page":"Jones Calculus","title":"Optical Beams","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"The Jones vector describes the polarisation of a light beam, defined as","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"beginpmatrix\n\tE_0x e^iphi_x \n\tE_0y e^iphi_y\nendpmatrix","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"where E_0 are magnitudes of the electric field, and phi are phases of the wave, both in x and y directions.","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"Common normalised Jones vectors are included in the package:","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"Jones.l","category":"page"},{"location":"jones/#Polarisation.Jones.l","page":"Jones Calculus","title":"Polarisation.Jones.l","text":"l(θ)\n\nLinearly polarised at theta angle.\n\n\n\n\n\n","category":"function"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"h","category":"page"},{"location":"jones/#Polarisation.Jones.h","page":"Jones Calculus","title":"Polarisation.Jones.h","text":"h\n\nLinearly polarised in x direction (horizontal):\n\nbeginpmatrix\n\t1 \n\t0\nendpmatrix\n\n\n\n\n\n","category":"constant"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"v","category":"page"},{"location":"jones/#Polarisation.Jones.v","page":"Jones Calculus","title":"Polarisation.Jones.v","text":"v\n\nLinearly polarised in y direction (vertical):\n\nbeginpmatrix\n\t0 \n\t1\nendpmatrix\n\n\n\n\n\n","category":"constant"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"rhcp","category":"page"},{"location":"jones/#Polarisation.Jones.rhcp","page":"Jones Calculus","title":"Polarisation.Jones.rhcp","text":"rhcp\n\nRight-hand circular polarised:\n\nfrac12\nbeginpmatrix\n\t1 \n\t-i\nendpmatrix\n\n\n\n\n\n","category":"constant"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"lhcp","category":"page"},{"location":"jones/#Polarisation.Jones.lhcp","page":"Jones Calculus","title":"Polarisation.Jones.lhcp","text":"lhcp\n\nLeft-hand circular polarised:\n\nfrac12\nbeginpmatrix\n\t1 \n\ti\nendpmatrix\n\n\n\n\n\n","category":"constant"},{"location":"jones/#Optical-Elements","page":"Jones Calculus","title":"Optical Elements","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"The Jones matrices are operators that act on the Jones vectors defined above. These matrices are implemented by various optical elements such as lenses, beam splitters, mirrors, etc.  Each matrix represents projection onto a one-dimensional complex subspace of the Jones vectors.","category":"page"},{"location":"jones/#Polarizers","page":"Jones Calculus","title":"Polarizers","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"The package specifies the following polarisers:","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"lp","category":"page"},{"location":"jones/#Polarisation.Jones.lp","page":"Jones Calculus","title":"Polarisation.Jones.lp","text":"lp(θ)\n\nLinear polariser at angle theta:\n\nbeginpmatrix\n\tcos^2(theta)  (theta)*sin(theta) \n\tcos(theta)sin(theta)  sin^2(theta)\nendpmatrix\n\n\n\n\n\n","category":"function"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"rcp","category":"page"},{"location":"jones/#Polarisation.Jones.rcp","page":"Jones Calculus","title":"Polarisation.Jones.rcp","text":"rcp\n\nRight circular polariser:\n\nfrac12\nbeginpmatrix\n\t1  i \n\t-i  1\nendpmatrix\n\n\n\n\n\n","category":"constant"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"lcp","category":"page"},{"location":"jones/#Polarisation.Jones.lcp","page":"Jones Calculus","title":"Polarisation.Jones.lcp","text":"lcp\n\nLeft circular polariser:\n\nfrac12\nbeginpmatrix\n\t1  -i \n\ti  1\nendpmatrix\n\n\n\n\n\n","category":"constant"},{"location":"jones/#Phase-retarders","page":"Jones Calculus","title":"Phase retarders","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"Phase retarders introduce a phase shift between the vertical and horizontal component of the field and thus change the polarization of the beam.","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"qwp","category":"page"},{"location":"jones/#Polarisation.Jones.qwp","page":"Jones Calculus","title":"Polarisation.Jones.qwp","text":"qwp(θ = 0)\n\nQuarter-wave plate.\n\n\n\n\n\n","category":"function"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"hwp","category":"page"},{"location":"jones/#Polarisation.Jones.hwp","page":"Jones Calculus","title":"Polarisation.Jones.hwp","text":"hwp(θ = 0)\n\nHalf-wave plate.\n\n\n\n\n\n","category":"function"},{"location":"jones/#Custom-operator","page":"Jones Calculus","title":"Custom operator","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"The Jones calculus requires matrix multiplication to happen in reverse, starting with the final element, and moving back to the beam.  Since this is unintuitive, in Julia we can override operators and have a handy shortcut:","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"|","category":"page"},{"location":"jones/#Base.:|","page":"Jones Calculus","title":"Base.:|","text":"|\n\nPerform Jones matrix multiplication on a reversed list of arguments.\n\n\n\n\n\n","category":"function"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"For example, let's take a left-handed circularly polarised beam of light, going through a quarter-wave plate, linear polariser, and another quarter-wave plate. Ordinarily, we would write it as:","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"qwp(90) * lp(45) * qwp * lhcp ≈ lhcp","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"But with | operator, we can say:","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"lhcp | qwp(0) | lp(45) | qwp(90) ≈ lhcp","category":"page"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"which is a more natural way to express it.","category":"page"},{"location":"jones/#References","page":"Jones Calculus","title":"References","text":"","category":"section"},{"location":"jones/","page":"Jones Calculus","title":"Jones Calculus","text":"https://en.wikipedia.org/wiki/Jones_calculus\nhttps://tinkering.xyz/polsim/","category":"page"},{"location":"#Polarisation.jl","page":"Polarisation.jl","title":"Polarisation.jl","text":"","category":"section"},{"location":"","page":"Polarisation.jl","title":"Polarisation.jl","text":"Julia package for polarised light calculations, inspired by polarization.","category":"page"},{"location":"#References","page":"Polarisation.jl","title":"References","text":"","category":"section"},{"location":"","page":"Polarisation.jl","title":"Polarisation.jl","text":"https://en.wikipedia.org/wiki/Jones_calculus\nhttps://en.wikipedia.org/wiki/Mueller_calculus\nhttps://tinkering.xyz/polsim","category":"page"}]
}
