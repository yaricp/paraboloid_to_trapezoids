const get_height_trapeziod = (
    point_x: number, focal_length: number, step_x: number
) => {
    // The formula of a parabola:
    // y = x^2/(4 * focal_length)
    // The equation of the tangent to a parabola at a particular point (point_x):
    // y = point_x * x / 2 * focal_length - point_x^2 / 4 * focal_length
    // The angle between the tangent and the X-axis:
    let tangent_angle = Math.atan(point_x / (2 * focal_length));
    // The height of the trapezoid:
    let height_trapeziod = step_x / Math.cos(tangent_angle);
    return Number(height_trapeziod.toFixed(3));
}

const get_base_trapeziod = (
    radius: number, number_sectors: number
) => {
    let sector_angle = 360 / number_sectors;
    // The angle in the right triangle:
    // (sector_angle * Math.PI / 180) / 2
    // the radius is the hypotenuse let's define the opposite leg
    let base_length = 2 * (
        Math.sin((sector_angle * Math.PI / 180) / 2) * radius
    );
    return Number(base_length.toFixed(3));
}

export const get_list_trapeziods = (
    focal_length: number, max_radius: number, light_spot_size: number
) => {
    // light_spot_size equal W
    // the rounded number of sectors
    let number_sectors = Math.floor(
        (2 * Math.PI * max_radius) / light_spot_size
    );
    console.log("number_sectors: ", number_sectors);
    let step_x = light_spot_size;
    let count_steps = Math.floor(max_radius / step_x);
    let trapezoid_height_array: number[] = [];
    let trapezoid_bases_array: number[] = [];
    for (let step=1; step <= count_steps * 2; step++) {
        // here step = W/2
        let point_x = step * step_x / 2;
        if (step % 2 === 0) {
            // On even steps, point_x is the X-coordinate of the tangent point.
            let trapezoid_height = get_height_trapeziod(
                point_x, focal_length, step_x
            )
            trapezoid_height_array.push(trapezoid_height);
        } else {
            // On odd steps, point_x is the X-coordinate 
            // of the intersection of neighboring tangents,
            // and it is also used as the radius for calculating 
            // the base of the trapezoid.
            let radius = point_x;
            let base_length = get_base_trapeziod(radius, number_sectors);
            trapezoid_bases_array.push(base_length);
        }
    }
    let radius = count_steps * step_x;
    let base_length = get_base_trapeziod(radius, number_sectors);
    trapezoid_bases_array.push(base_length);
    return {
        "heights_array": trapezoid_height_array,
        "bases_array": trapezoid_bases_array,
        "number_sectors": number_sectors
    }
}

