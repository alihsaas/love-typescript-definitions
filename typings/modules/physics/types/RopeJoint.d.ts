/**
 * The RopeJoint enforces a maximum distance between two points on two bodies. It has no other effect.
 * @link [RopeJoint](https://love2d.org/wiki/RopeJoint)
 */
declare interface RopeJoint extends Joint {
    /**
     * Gets the maximum length of a RopeJoint.
     *
     * @return maxLength, The maximum length of the RopeJoint.
     * @link [RopeJoint:getMaxLength](https://love2d.org/wiki/RopeJoint:getMaxLength)
     */
    getMaxLength(): number;

    /**
     * Sets the maximum length of a RopeJoint.
     *
     * @param maxLength The maximum length of the RopeJoint.
     * @link [RopeJoint:setMaxLength](https://love2d.org/wiki/RopeJoint:setMaxLength)
     */
    setMaxLength(maxLength: number): void;

}
