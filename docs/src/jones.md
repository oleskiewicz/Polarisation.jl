# Jones Calculus

## Index
```@index
```

## Optical Beams
The Jones vector describes the polarisation of a light beam, defined as

```math
\begin{pmatrix}
	E_{0x} e^{i\phi_x} \\
	E_{0y} e^{i\phi_y}
\end{pmatrix},
```
where ``E_0`` are magnitudes of the electric field, and ``\phi`` are phases of
the wave, both in ``x`` and ``y`` directions.

Common normalised Jones vectors are included in the package:
```@docs
Jones.l
```
```@docs
h
```
```@docs
v
```
```@docs
rhcp
```
```@docs
lhcp
```

## Optical Elements
The Jones matrices are operators that act on the Jones vectors defined above.
These matrices are implemented by various optical elements such as lenses, beam
splitters, mirrors, etc.  Each matrix represents projection onto a
one-dimensional complex subspace of the Jones vectors.

### Polarizers
The package specifies the following polarisers:
```@docs
lp
```
```@docs
rcp
```
```@docs
lcp
```


### Phase retarders
Phase retarders introduce a phase shift between the vertical and horizontal
component of the field and thus change the polarization of the beam.

```@docs
qwp
```
```@docs
hwp
```

## References
- <https://en.wikipedia.org/wiki/Jones_calculus>
- <https://tinkering.xyz/polsim/>
