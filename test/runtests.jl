using Test, LinearAlgebra, Unitful, Polarisation.Jones, Polarisation.Mueller


@testset "algebra" begin
    lhcp = normalize([1.0; +im])
    qwp = ℯ^((im * π) / 4) * [1 0; 0 -im]
    qwp90 = ℯ^((-im * π) / 4) * [1 0; 0 im]
    lp(θ) = [cos(θ)^2 cos(θ)*sin(θ); cos(θ)*sin(θ) sin(θ)^2]
    lp45 = lp(deg2rad(45))
    @test lhcp == qwp90 * lp45 * qwp * lhcp
end


@testset "Jones calculus" begin

    @testset "linear polariser" begin
        @test lp(0u"°") ≈ Elem([1 0; 0 0])
        @test lp(90u"°") ≈ Elem([0 0; 0 1])
        @test lp(45u"°") ≈ Elem(normalize([1 1; 1 1]))
        @test lp(-45u"°") ≈ Elem(normalize([1 -1; -1 1]))
    end

    @testset "quarter-wave plate" begin
        @test qwp(0u"°") ≈ Elem(ℯ^((-im * π) / 4) * [1 0; 0 im])
        @test qwp(90u"°") ≈ Elem(ℯ^((im * π) / 4) * [1 0; 0 -im])
    end

    @testset "half-wave plate" begin
        @test hwp(0u"°") ≈ Elem(ℯ^((-im * π) / 2) * [1 0; 0 -1])
        @test hwp(90u"°") ≈ Elem(ℯ^((-im * π) / 2) * [-1 0; 0 1])
    end

    @testset "beam + lp" begin
        @test l(0u"°") + lp(0u"°") ≈ l(0u"°")
        @test l(90u"°") + lp(90u"°") ≈ l(90u"°")
    end

end


@testset "Mueller calculus" begin

    @testset "conversion of linear polariseres" begin
        @test jones2mueller(lp(deg2rad(0))) ≈ 0.5 * [1 1 0 0; 1 1 0 0; 0 0 0 0; 0 0 0 0]
        @test jones2mueller(lp(deg2rad(90))) ≈ 0.5 * [1 -1 0 0; -1 1 0 0; 0 0 0 0; 0 0 0 0]
        @test jones2mueller(lp(deg2rad(45))) ≈ 0.5 * [1 0 1 0; 0 0 0 0; 1 0 1 0; 0 0 0 0]
        @test jones2mueller(lp(deg2rad(-45))) ≈ 0.5 * [1 0 -1 0; 0 0 0 0; -1 0 1 0; 0 0 0 0]
    end

    @testset "conversion of quarter-wave plates" begin
        @test jones2mueller(qwp(deg2rad(0))) ≈ [1 0 0 0; 0 1 0 0; 0 0 0 1; 0 0 -1 0]
        @test jones2mueller(qwp(deg2rad(90))) ≈ [1 0 0 0; 0 1 0 0; 0 0 0 -1; 0 0 1 0]
    end

    @testset "conversion of Jones to Stokes vectors" begin
        @test jones2stokes([1; 0]) ≈ [1; 1; 0; 0]
        @test jones2stokes([0; 1]) ≈ [1; -1; 0; 0]
        @test jones2stokes(l(deg2rad(45))) ≈ [1; 0; 1; 0]
        @test jones2stokes(l(deg2rad(-45))) ≈ [1; 0; -1; 0]
        @test jones2stokes(rhcp) ≈ [1; 0; 0; -1]
        @test jones2stokes(lhcp) ≈ [1; 0; 0; 1]
    end

end
