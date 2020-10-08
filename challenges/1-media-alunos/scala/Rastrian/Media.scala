object Media {
    def media(s: Seq[Int]) = s.foldLeft(0)(_+_) / s.size

    def main(args: Array[String]): Unit = {
        println(media(Seq(22,53)))
    }
}