module Mueller
using LinearAlgebra
export jones2mueller, jones2stokes

A = [1 0 0 1; 1 0 0 -1; 0 1 1 0; 0 -im im 0]

jones2mueller(J) = A * kron(J, J') * inv(A)

function jones2stokes(j)
    Ex = j[1]
    Ey = j[2]
    [abs(Ex)^2 + abs(Ey)^2; abs(Ex)^2 - abs(Ey)^2; 2 * real(Ex * Ey'); -2 * imag(Ex * Ey')]
end

# TODO: figure out namespacing
# l(θ) = jones2stokes(Jones.l(θ))

rhcp = [1; 0; 0; 1]
lhcp = [1; 0; 0; -1]

unp = [1; 0; 0; 0]

end
