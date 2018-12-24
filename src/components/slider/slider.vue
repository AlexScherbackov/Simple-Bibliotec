<template>
	<div class="slider__wrapp">
		<div class="slider js-slider">
			<div 
			class="slider__body" 
			:style="{left: sliderOffsetLeft + 'px'}"
			>
			<div 
			class="slider__slide js-slide"
			v-for="slide in slidesList"
			:style="'background-image: url('+ slide + ')'"
			>

			</div>	
		</div>
	</div>
	<div class="slider__control-wrapp">
		<button class="slider__control slider__control--left" @click="prevSlide">
			<i class="el-icon-arrow-left slider__control-arrow"></i>
		</button>
		<button class="slider__control slider__control--right" @click="nextSlide">
			<i class="el-icon-arrow-right slider__control-arrow"></i>
		</button>

	</div>
</div>

</template>

<script>
	export default {
		data(){
			return {
				totalSlides: 0,
				activeSlide: 1,
				sliderOffsetLeft: 0,
				sliderOffsetStep: 0,
				slidesList: [
				'./src/assets/img/cesar-viteri-426877-unsplash.jpg',
				'./src/assets/img/janko-ferlic-174927-unsplash.jpg',
				'./src/assets/img/susan-yin-647448-unsplash.jpg',
				'./src/assets/img/thomas-kelley-128626-unsplash.jpg',
				'./src/assets/img/valentin-366196-unsplash.jpg'
				]
			}
		},
		methods:{
			initSlider(){
				let sliderBody = this.$el.querySelector('.js-slider');
				let sliderSlides = sliderBody.querySelectorAll('.js-slide');
				this.sliderOffsetStep = sliderBody.clientWidth;
				this.totalSlides = sliderSlides.length - 1;
			},
			currentSlide(current){
				if(current > 0 && current <= this.totalSlides){
					this.activeSlide = current;
					this.sliderOffsetLeft = -(this.activeSlide * this.sliderOffsetStep - this.sliderOffsetStep);
				}
			},
			nextSlide(){
				if(this.activeSlide < this.totalSlides){
					this.activeSlide += 1;
					this.currentSlide(this.activeSlide);
				} else if(this.activeSlide >= this.totalSlides){
					this.activeSlide = 1;
					this.currentSlide(this.activeSlide)
				}
				
			},
			prevSlide(){
				if(this.activeSlide > 1){
					this.activeSlide -= 1;
					this.currentSlide(this.activeSlide);
				} else if(this.activeSlide <= 1){
					this.activeSlide = this.totalSlides;
					this.currentSlide(this.activeSlide)
				}
			}
		},
		mounted(){
			this.initSlider();
			window.addEventListener('resize', ()=>{
				this.initSlider();
				this.currentSlide(this.activeSlide);
			})
		}
	}
</script>

<style lang="scss" scoped>
	.slider{
		width: 100%;
		height: 576px;
		min-width: 290px;
		position: relative;
		overflow: hidden;
		&__body{
			min-width: auto;
			height: 100%;
			display: flex;
			position: relative;
			align-items: stretch;
			transition: all 1s ease;
		}
		&__slide{
			min-width: 100%;
			height: 100%;
			background-size: cover;
			background-position: center;
			flex: 1 100%;
		}
		&__wrapp{
			position: relative;
		}
		&__control-wrapp{
			position: absolute;
			top: 50%;
			transform: translateY(-35px);
			width: 100vw;
			box-sizing: border-box;
		}
		&__control{
			display: block;
			position: absolute;
			width: 70px;
			height: 70px;
			border-radius: 50%;
			color: #fff;
    	background-color: #409EFF;
    	border: 1px solid #409EFF;
    	cursor: pointer;
    	transition: all ease 0.2s;
    	&:hover{
    		background-color: #66b1ff;
    		border-color: #66b1ff;
    	}
    	&:hover,&:focus{
    		outline: none;
    	}
    	&--right{
    		right: 5%;
     	}
			&--left{
				left: 5%;
				
			}
		}
		&__control-arrow{
			font-size: 32px;
			width: 32px;
			height: 32px;
		}
	}
</style>