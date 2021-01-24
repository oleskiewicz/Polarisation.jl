using Documenter, Polarisation, Polarisation.Jones

makedocs(sitename = "Polarisation.jl", modules = [Polarisation], doctest = false)

deploydocs(repo = "github.com/oleskiewicz/Polarisation.jl.git")
