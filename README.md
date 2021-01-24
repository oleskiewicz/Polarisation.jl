# Polarisation.jl
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/oleskiewicz/Polarisation.jl)
[![Dev](https://img.shields.io/badge/docs-dev-blue.svg)](https://oleskiewicz.github.io/Polarisation.jl/dev)
[![Build Status](https://github.com/oleskiewicz/Polarisation.jl/workflows/CI/badge.svg)](https://github.com/oleskiewicz/Polarisation.jl/actions)

Julia package for polarised light calculations, inspired by
[`zmitchell/polarization`](https://github.com/zmitchell/polarization).

```julia
using Polarisation.Jones

# linearly polarised light at 90°, using Unitful.jl
l(90u"°")

# left-hand circular polarised beam, going through 3 elements
lhcp | qwp(0) | lp(u"45°") | qwp(u"90°")
```

# Roadmap
- write complex interaction tests for Jones calculus
- implement Mueller calculus
- write parser for `polsim` TOML files
- write visualisation functions

# References
- <https://en.wikipedia.org/wiki/Jones_calculus>
- <https://en.wikipedia.org/wiki/Mueller_calculus>
- <https://tinkering.xyz/polsim>
