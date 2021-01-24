module Jones
using LinearAlgebra, StaticArrays

import Base: |
import LinearAlgebra: normalize

export Beam, Elem, l, h, v, rhcp, lhcp, lp, qwp, hwp, lcp, rcp


Beam{T} = SArray{Tuple{2},T,1,2}
Elem{T} = SArray{Tuple{2,2},T,2,4}

normalize(e::Elem) = Elem(normalize(Array(e)))


"""
    |

Perform Jones matrix multiplication on a reversed list of arguments.
"""
(|)(es::Elem...) = reduce(*, reverse(es))
(|)(b::Beam, es::Elem...) = reduce(*, reverse(es)) * b


"""
	h

Linearly polarised in ``x`` direction (horizontal):
```math
\\begin{pmatrix}
	1 \\\\
	0
\\end{pmatrix}
```
"""
h = Beam([1; 0])


"""
	v

Linearly polarised in ``y`` direction (vertical):
```math
\\begin{pmatrix}
	0 \\\\
	1
\\end{pmatrix}
```
"""
v = Beam([0; 1])


"""
	l(θ)

Linearly polarised at ``\\theta`` angle.
"""
l(θ = 0) = Beam(cos(θ), sin(θ)) |> normalize


"""
	rhcp

Right-hand circular polarised:
```math
\\frac{1,2}
\\begin{pmatrix}
	1 \\\\
	-i
\\end{pmatrix}
```
"""
rhcp = Beam([1; -im]) |> normalize


"""
	lhcp

Left-hand circular polarised:
```math
\\frac{1,2}
\\begin{pmatrix}
	1 \\\\
	i
\\end{pmatrix}
```
"""
lhcp = Beam([1; im]) |> normalize


"""
	lp(θ)

Linear polariser at angle ``\\theta``:
```math
\\begin{pmatrix}
	\\cos^2(\\theta) & (\\theta)*sin(\\theta) \\\\
	\\cos(\\theta)\\sin(\\theta) & \\sin^2(\\theta)
\\end{pmatrix}
```
"""
lp(θ = 0) = Elem([
    cos(θ)^2 cos(θ)*sin(θ)
    cos(θ)*sin(θ) sin(θ)^2
])


"""
	rcp

Right circular polariser:
```math
\\frac{1,2}
\\begin{pmatrix}
	1 & i \\\\
	-i & 1
\\end{pmatrix}
```
"""
rcp = Elem([1 im; -im 1]) |> normalize

"""
	lcp

Left circular polariser:
```math
\\frac{1,2}
\\begin{pmatrix}
	1 & -i \\\\
	i & 1
\\end{pmatrix}
```
"""
lcp = Elem([1 -im; im 1]) |> normalize

"""
	qwp(θ = 0)

Quarter-wave plate.
"""
qwp(θ = 0) =
    ℯ^((-im * π) / 4) * Elem(
        [
            cos(θ)^2+im*sin(θ)^2 (1-im)*sin(θ)*cos(θ)
            (1-im)*sin(θ)*cos(θ) sin(θ)^2+im*cos(θ)^2
        ],
    )

"""
	hwp(θ = 0)

Half-wave plate.
"""
hwp(θ = 0) =
    ℯ^((-im * π) / 2) * Elem([
        cos(θ)^2-sin(θ)^2 2*sin(θ)*cos(θ)
        2*sin(θ)*cos(θ) sin(θ)^2-cos(θ)^2
    ])

end
